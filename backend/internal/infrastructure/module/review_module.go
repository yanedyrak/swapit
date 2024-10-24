package module

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/internal/infrastructure/auth"
	"github.com/yanedyrak/swapit/internal/infrastructure/http"
	"github.com/yanedyrak/swapit/internal/repository"
	"github.com/yanedyrak/swapit/internal/usecase"
	"gorm.io/gorm"
)

func InitReviewModule(db *gorm.DB, router *gin.Engine) {
	reviewRepo := repository.NewReviewRepo(db)
	reviewUseCase := usecase.NewReviewUseCase(reviewRepo)
	reviewHTTP := http.NewReviewHTTP(reviewUseCase)
	authorized := router.Group("/")
	authorized.Use(auth.AuthMiddleware())
	router.POST("/reviews", reviewHTTP.CreateReview)
	{
		authorized.GET("/getid", reviewHTTP.GetId)
	}

}
