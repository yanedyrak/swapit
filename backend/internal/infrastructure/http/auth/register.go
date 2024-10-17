package http

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/internal/entity"
	"github.com/yanedyrak/swapit/internal/infrastructure/lib"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"net/http"
)

func Register(db *gorm.DB, c *gin.Context) {

	username := c.PostForm("username")
	email := c.PostForm("email")
	password := c.PostForm("password")

	var user entity.User

	db.Where("email = ?", email).First(&user)
	if user.Email != "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Email already exists"})
		return
	}
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}
	db.Create(&entity.User{
		Username: username,
		Email:    email,
		Password: string(hashedPassword),
		Phone:    "",
		Location: "",
		Rating:   0,
		Items:    []entity.Item{},
		Reviews:  []entity.Review{},
	})

	tokens, err := lib.CreateTokens(user.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create tokens"})
		return
	}
	c.SetCookie("access_token", tokens.AccessToken, 3600, "/", "localhost", false, true)
	c.SetCookie("refresh_token", tokens.RefreshToken, 86400, "/", "localhost", false, true)

	c.JSON(http.StatusCreated, user)
}
