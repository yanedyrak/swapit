package http

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/internal/entity"
	"github.com/yanedyrak/swapit/internal/infrastructure/lib"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"net/http"
)

func Login(db *gorm.DB, c *gin.Context) {

	email := c.PostForm("username")
	password := c.PostForm("password")

	var user entity.User

	db.Where("email = ?", email).First(&user)
	if user.Email == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Email not found"})
		return
	}
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid password"})
		return
	}
	tokens, err := lib.CreateTokens(user.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create tokens"})
	}
	c.SetCookie("access_token", tokens.AccessToken, 3600, "/", "", false, true)
	c.SetCookie("refresh_token", tokens.RefreshToken, 86400, "/", "", false, true)
	c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
}
