package auth

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/internal/infrastructure/lib"
	"net/http"
	"strings"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.Request.Header.Get("Authorization")
		if authHeader == "" {
			handleUnauthorized(c, "Unauthorized")
			return
		}
		token := strings.TrimPrefix(authHeader, "Bearer ")
		id, err := lib.ParseToken(token)
		if err != nil {
			handleUnauthorized(c, "Invalid token")
			return
		}

		c.Set("user_id", id)
		c.Next()
	}
}

func handleUnauthorized(c *gin.Context, message string) {
	c.JSON(http.StatusUnauthorized, gin.H{"error": message})
	c.Abort()
}
