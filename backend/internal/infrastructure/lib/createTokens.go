package lib

import (
	"github.com/golang-jwt/jwt"
	"time"
)

var mySecret = []byte("secret")

func CreateTokens(id uint) (string, error) {

	accessToken := jwt.New(jwt.SigningMethodHS256)

	claims := accessToken.Claims.(jwt.MapClaims)
	claims["id"] = id
	claims["exp"] = time.Now().Add(time.Minute * 15).Unix()

	accessTokenString, err := accessToken.SignedString(mySecret)
	if err != nil {
		return "", err
	}

	return accessTokenString, nil
}
