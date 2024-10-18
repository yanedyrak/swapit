package module

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/internal/infrastructure/http"
	"gorm.io/gorm"
)

func InitAuthModule(db *gorm.DB, router *gin.Engine) {
	authHTTP := http.NewAuthHTTP(db)
	router.POST("/register", authHTTP.Register)
	router.POST("/login", authHTTP.Login)
	router.POST("/logout", authHTTP.Logout)
}
