package http

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/internal/entity"
	"net/http"
)

type UserUseCase interface {
	FindByID(id uint) (*entity.User, error)
}

type UserHTTP struct {
	userUC UserUseCase
}

func NewUserHTTP(userUC UserUseCase) *UserHTTP {
	return &UserHTTP{
		userUC: userUC,
	}
}

func (u *UserHTTP) FindByID(c *gin.Context) {
	id, exists := c.Get("user_id")

	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	user, err := u.userUC.FindByID(id.(uint))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, user)
}
