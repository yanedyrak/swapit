package lib

import (
	"fmt"
	"github.com/golang-jwt/jwt"
)

func ParseToken(token string) (string, error) {

	parsedToken, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method")
		}
		return mySecret, nil
	})

	if err != nil {
		return "", err
	}

	if claims, ok := parsedToken.Claims.(jwt.MapClaims); ok && parsedToken.Valid {
		id := claims["id"].(string)
		return id, nil
	}

	return "", fmt.Errorf("invalid token")
}
