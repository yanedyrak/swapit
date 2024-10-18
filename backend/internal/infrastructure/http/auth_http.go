package http

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/internal/entity"
	"github.com/yanedyrak/swapit/internal/infrastructure/lib"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"net/http"
)

type AuthHTTP struct {
	db *gorm.DB
}

func NewAuthHTTP(db *gorm.DB) *AuthHTTP { return &AuthHTTP{db: db} }

func (a *AuthHTTP) Login(c *gin.Context) {
	email, password := c.PostForm("email"), c.PostForm("password")
	var user entity.User

	if err := a.db.Where("email = ?", email).First(&user).Error; err != nil || user.Email == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid email or password"})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid email or password"})
		return
	}

	if tokens, err := lib.CreateTokens(user.ID); err == nil {
		c.SetCookie("access_token", tokens.AccessToken, 3600, "/", "", false, true)
		c.SetCookie("refresh_token", tokens.RefreshToken, 86400, "/", "", false, true)
		c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
	} else {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create tokens"})
	}
}

func (a *AuthHTTP) Logout(c *gin.Context) {
	c.SetCookie("access_token", "", -1, "/", "", false, true)
	c.SetCookie("refresh_token", "", -1, "/", "", false, true)
	c.JSON(http.StatusOK, gin.H{"message": "Logout successful"})
}

func (a *AuthHTTP) Register(c *gin.Context) {
	username, email, password := c.PostForm("username"), c.PostForm("email"), c.PostForm("password")
	var existingUser entity.User

	if err := a.db.Where("email = ?", email).First(&existingUser).Error; err == nil && existingUser.Email != "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Email already exists"})
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}

	user := entity.User{
		Username: username,
		Email:    email,
		Password: string(hashedPassword),
	}

	if err := a.db.Create(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
		return
	}

	if tokens, err := lib.CreateTokens(user.ID); err == nil {
		c.SetCookie("access_token", tokens.AccessToken, 3600, "/", "localhost", false, true)
		c.SetCookie("refresh_token", tokens.RefreshToken, 86400, "/", "localhost", false, true)
		c.JSON(http.StatusCreated, user)
	} else {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create tokens"})
	}
}
