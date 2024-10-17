package auth

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/internal/infrastructure/lib"
	"net/http"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		_, err := c.Cookie("access_token")
		if err != nil {
			refreshToken, err := c.Cookie("refresh_token")
			if err != nil {
				handleUnauthorized(c, "tokens not found")
				return
			}

			claims, err := lib.ParseToken(refreshToken)
			if err != nil {
				handleUnauthorized(c, "Invalid refresh token")
				return
			}

			newTokens, err := lib.CreateTokens(claims)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to generate new access token"})
				c.Abort()
				return
			}

			c.SetCookie("access_token", newTokens.AccessToken, 900, "/", "localhost", false, false)
			c.JSON(http.StatusOK, gin.H{"message": "Access token refreshed"})
		}

		c.Next()
	}
}

func handleUnauthorized(c *gin.Context, message string) {
	c.JSON(http.StatusUnauthorized, gin.H{"error": message})
	c.Abort()
}
