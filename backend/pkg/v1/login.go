package v1

import (
	"database/sql"
	"fmt"
	"net/http"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

type RequestLoginInfo struct {
	ID       string `json:"userId" binding:"required"`
	Password string `json:"userPw" binding:"required"`
}
type Claims struct {
	ID       string
	Identity string
	jwt.StandardClaims
}

func Login(c *gin.Context) {
	var req RequestLoginInfo
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	conn, err := sql.Open("mysql", "root:1234@tcp(127.0.0.1:3306)/daebak")
	if err != nil {
		fmt.Println(err.Error())
	}
	defer conn.Close()
	fmt.Println(req.ID, req.Password)
	var user_id string
	var identity string
	err = conn.QueryRow("select user_id, identity from user where user_id = ? and user_pw = ?", req.ID, req.Password).Scan(&user_id, &identity)
	if err != nil {
		c.JSON(http.StatusNotFound, err)
	}
	jwtToken, err := GetJwtToken(user_id, identity)
	c.SetCookie("access_token", jwtToken, 60*60, "/", "localhost:3002", false, false)
	c.JSON(http.StatusOK, gin.H{"message": "Login Success..."})
}

func GetJwtToken(userId string, identity string) (string, error) {
	expirationTime := time.Now().Add(60 * time.Minute)

	claims := &Claims{
		ID:       userId,
		Identity: identity,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString([]byte("토큰"))
	if err != nil {
		return "", fmt.Errorf("token signed Error")
	} else {
		return tokenString, nil
	}
}
