package v1

import (
	"net/http"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

func GetUserInfo(c *gin.Context) {
	token, err := c.Request.Cookie("access_token")
	if err != nil {
		c.JSON(http.StatusUnauthorized, err)
	}
	tknStr := token.Value

	if tknStr == "" {
		c.JSON(http.StatusUnauthorized, err)
	}

	claims := &Claims{}

	test, err := jwt.ParseWithClaims(tknStr, claims, func(token *jwt.Token) (interface{}, error) {
		return "토큰", nil
	})

	c.JSON(http.StatusOK, test)
}
