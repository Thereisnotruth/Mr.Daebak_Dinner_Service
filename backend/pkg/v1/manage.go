package v1

import (
	"database/sql"
	"fmt"
	"net/http"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

type Order struct {
	UserID  string `json:"userId"`
	Orders  string `json:"orders"`
	Address string `json:"address"`
	Details string `json:"details"`
	Time    string `json:"time"`
	Done    int    `json:"done"`
}

func Manage(c *gin.Context) {
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
	rows, err := conn.Query("SELECT * FROM orders where done=0 order by time asc")
	if err != nil {
		fmt.Println(err.Error())
	}
	var userId string
	var orders string
	var address string
	var details string
	var orderTime string
	var done int
	var response []Order

	for rows.Next() {
		err := rows.Scan(&userId, &orders, &address, &details, &orderTime, &done)
		if err != nil {
			fmt.Println(err.Error())
		}
		var res Order
		res.UserID = userId
		res.Orders = orders
		res.Address = address
		fmt.Println(res.Time)
		res.Details = details
		res.Time = orderTime
		res.Done = done
		response = append(response, res)
	}
	c.JSON(http.StatusOK, response)
}

func Done(c *gin.Context) {
	time := c.Param("time")
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

	_, err = conn.Exec("update orders set done=1 where user_id=? and time=? and done=0", claims.ID, time)
	if err != nil {
		c.JSON(http.StatusNotFound, err)
	}
	c.JSON(http.StatusOK, gin.H{"message": "Done success..."})
}
