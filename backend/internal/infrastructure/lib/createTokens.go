package lib

import (
	"github.com/golang-jwt/jwt"
	"github.com/yanedyrak/swapit/internal/infrastructure/auth"
	"time"
)

var mySecret = []byte("secret")

func CreateTokens(id string) (auth.Tokens, error) {

	accessToken := jwt.New(jwt.SigningMethodHS256)
	refreshToken := jwt.New(jwt.SigningMethodHS256)

	claims := accessToken.Claims.(jwt.MapClaims)
	claims["id"] = id
	claims["exp"] = time.Now().Add(time.Minute * 15).Unix()

	refreshClaims := refreshToken.Claims.(jwt.MapClaims)
	refreshClaims["id"] = id
	refreshClaims["exp"] = time.Now().Add(time.Hour * 24).Unix()

	accessTokenString, err := accessToken.SignedString(mySecret)
	if err != nil {
		return auth.Tokens{}, err
	}

	refreshTokenString, err := refreshToken.SignedString(mySecret)
	if err != nil {
		return auth.Tokens{}, err
	}

	return auth.Tokens{
		AccessToken:  accessTokenString,
		RefreshToken: refreshTokenString,
	}, nil
}
