package lib

import (
	"fmt"
	"github.com/golang-jwt/jwt"
)

func ParseToken(token string) (uint, error) {

	parsedToken, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method")
		}
		return mySecret, nil
	})

	if err != nil {
		return 0, err
	}

	if claims, ok := parsedToken.Claims.(jwt.MapClaims); ok && parsedToken.Valid {
		id := uint(claims["id"].(float64))
		return id, nil
	}

	return 0, fmt.Errorf("invalid token")
}
