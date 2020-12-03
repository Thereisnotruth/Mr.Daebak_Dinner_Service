package v1

import (
	"database/sql"
	"net/http"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

type UserInfo struct {
	Name     string `json:"name"`
	ID       string `json:"userId"`
	Address  string `json:"address"`
	Identity string `json:"identity"`
}
type RequestModifyUserInfo struct {
	Password string `json:"userPw" binding:"required"`
	Address  string `json:"address" binding:"required"`
}

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

	_, err = jwt.ParseWithClaims(tknStr, claims, func(token *jwt.Token) (interface{}, error) {
		return "토큰", nil
	})

	conn, err := sql.Open("mysql", "root:1234@tcp(127.0.0.1:3306)/daebak")
	if err != nil {
		c.JSON(http.StatusBadGateway, err)
	}
	var name string
	var userId string
	var userPw string
	var address string
	var identity string
	var userInfo UserInfo
	err = conn.QueryRow("SELECT * FROM user where user_id=?", claims.ID).Scan(&name, &userId, &userPw, &address, &identity)
	if err != nil {
		c.JSON(http.StatusNotFound, err)
	}

	userInfo.Name = name
	userInfo.ID = userId
	userInfo.Address = address
	userInfo.Identity = identity

	c.JSON(http.StatusOK, userInfo)
}

func ModifyUserInfo(c *gin.Context) {
	var req RequestModifyUserInfo
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	token, err := c.Request.Cookie("access_token")
	if err != nil {
		c.JSON(http.StatusUnauthorized, err)
	}
	tknStr := token.Value

	if tknStr == "" {
		c.JSON(http.StatusUnauthorized, err)
	}

	claims := &Claims{}

	_, err = jwt.ParseWithClaims(tknStr, claims, func(token *jwt.Token) (interface{}, error) {
		return "토큰", nil
	})

	conn, err := sql.Open("mysql", "root:1234@tcp(127.0.0.1:3306)/daebak")
	if err != nil {
		c.JSON(http.StatusBadGateway, err)
	}
	_, err = conn.Exec("update user set user_address=?, user_pw=? where user_id=?", req.Address, req.Password, claims.ID)
	if err != nil {
		c.JSON(http.StatusNotFound, err)
	}

	c.JSON(http.StatusOK, gin.H{"message": "Update success..."})
}
