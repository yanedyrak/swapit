package module

import (
	"github.com/gin-gonic/gin"
	http "github.com/yanedyrak/swapit/internal/infrastructure/http/auth"
	"gorm.io/gorm"
)

func InitAuthModule(db *gorm.DB, router *gin.Engine) {
	router.POST("/auth/register", http.Register(db))
}
