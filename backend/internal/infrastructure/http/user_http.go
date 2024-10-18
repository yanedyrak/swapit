package http

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/internal/entity"
	"net/http"
)

type UserUseCase interface {
	CreateUser(user *entity.User) error
}

type UserHTTP struct {
	userUC UserUseCase
}

func NewUserHTTP(userUC UserUseCase) *UserHTTP {
	return &UserHTTP{
		userUC: userUC,
	}
}

func (u *UserHTTP) CreateUser(c *gin.Context) {
	var user entity.User

	// Декодируем JSON из тела запроса в структуру пользователя
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	// Вызываем use case для создания пользователя
	if err := u.userUC.CreateUser(&user); err != nil {
		// Если возникает ошибка при создании пользователя, возвращаем 500
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Возвращаем успешный ответ с данными пользователя
	c.JSON(http.StatusCreated, user)
}

func (u *UserHTTP) Hello(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Hello, World!"})
}
