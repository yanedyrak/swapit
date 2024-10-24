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
type RegisterRequest struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}
type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func NewAuthHTTP(db *gorm.DB) *AuthHTTP { return &AuthHTTP{db: db} }

func (a *AuthHTTP) Login(c *gin.Context) {
	var user entity.User
	var req LoginRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}
	if err := a.db.Where("email = ?", req.Email).First(&user).Error; err != nil || user.Email == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid email or password"})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password)); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid email or password"})
		return
	}

	if token, err := lib.CreateTokens(user.ID); err == nil {
		c.JSON(http.StatusOK, gin.H{
			"token": token})
	} else {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create tokens"})
	}
}

func (a *AuthHTTP) Register(c *gin.Context) {
	var req RegisterRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	// Check if the user already exists by email
	var existingUser entity.User
	if err := a.db.Where("email = ?", req.Email).First(&existingUser).Error; err == nil {
		c.JSON(http.StatusConflict, gin.H{"error": "Email already registered"})
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}

	user := entity.User{
		Username: req.Username,
		Email:    req.Email,
		Password: string(hashedPassword),
	}

	if err := a.db.Create(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
		return
	}

	if token, err := lib.CreateTokens(user.ID); err == nil {
		c.JSON(http.StatusCreated, gin.H{"token": token})
	} else {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create tokens"})
	}
}
