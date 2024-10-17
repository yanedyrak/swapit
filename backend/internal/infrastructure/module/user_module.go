package module

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/internal/infrastructure/http"
	"github.com/yanedyrak/swapit/internal/repository"
	"github.com/yanedyrak/swapit/internal/usecase"
	"gorm.io/gorm"
)

func InitUserModule(db *gorm.DB, router *gin.Engine) {
	userRepo := repository.NewUserRepo(db)
	userUseCase := usecase.NewUserUseCase(userRepo)
	userHTTP := http.NewUserHTTP(userUseCase)
	router.POST("/users", userHTTP.CreateUser)
	router.GET("/hello", userHTTP.Hello)
}
