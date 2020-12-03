package v1

import (
	"database/sql"
	"fmt"
	"net/http"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

type RequestPostOrder struct {
	Order     string    `json:"order"`
	Address   string    `json:"address"`
	Details   string    `json:"details"`
	OrderTime time.Time `json:"orderTime"`
}

type ResponseGetOrder struct {
	Order   string `json:"order"`
	Address string `json:"address"`
	Details string `json:details"`
}

func PostOrder(c *gin.Context) {
	var req RequestPostOrder
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
		fmt.Println(err.Error())
	}
	defer conn.Close()
	fmt.Println(req)
	_, err = conn.Exec("insert into orders values (?, ?, ?, ?, ?, 0);", claims.ID, req.Order, req.Address, req.Details, req.OrderTime)
	if err != nil {
		fmt.Println(err)
	}

	var orders int
	err = conn.QueryRow("select orders from user where user_id = ?", claims.ID).Scan(&orders)
	if err != nil {
		c.JSON(http.StatusNotFound, err)
	}
	orders += 1
	_, err = conn.Exec("update user set orders=? where user_id=?", orders, claims.ID)
	if err != nil {
		c.JSON(http.StatusNotFound, err)
	}
	c.JSON(http.StatusOK, gin.H{"message": "Order success..."})
}

func GetOrder(c *gin.Context) {
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
		fmt.Println(err.Error())
	}
	defer conn.Close()
	rows, err := conn.Query("SELECT * FROM orders where user_id=? order by time desc", claims.ID)
	if err != nil {
		fmt.Println(err.Error())
	}
	var userId string
	var orders string
	var address string
	var details string
	var orderTime string
	var done int
	var response []ResponseGetOrder
	for rows.Next() {
		err := rows.Scan(&userId, &orders, &address, &details, &orderTime, &done)
		if err != nil {
			fmt.Println(err.Error())
		}
		var res ResponseGetOrder
		res.Order = orders
		res.Address = address
		res.Details = details
		response = append(response, res)
	}
	c.JSON(http.StatusOK, response)
}
