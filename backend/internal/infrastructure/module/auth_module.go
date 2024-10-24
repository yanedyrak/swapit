package module

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/internal/infrastructure/http"
	"gorm.io/gorm"
)

func InitAuthModule(db *gorm.DB, router *gin.Engine) {
	authHTTP := http.NewAuthHTTP(db)
	router.POST("/auth/register", authHTTP.Register)
	router.POST("/auth/login", authHTTP.Login)
}
