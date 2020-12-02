package v1

import (
	"database/sql"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type RequestRegisterInfo struct {
	Name           string `json:"name" binding:"required"`
	ID             string `json:"userId" binding:"required"`
	Password       string `json:"userPw" binding:"required"`
	Address        string `json:"address" binding:"required"`
	Identification string `json:"identity" binding:"required"`
}

func Register(c *gin.Context) {
	var req RequestRegisterInfo
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	conn, err := sql.Open("mysql", "root:1234@tcp(127.0.0.1:3306)/daebak")
	if err != nil {
		fmt.Println(err.Error())
	}
	defer conn.Close()
	var prevUser string
	err = conn.QueryRow("select user_id from user where user_id = ?", req.ID).Scan(&prevUser)

	if prevUser == req.ID {
		c.JSON(http.StatusConflict, gin.H{"error": "ID already exists..."})
		return
	}

	_, err = conn.Exec("insert into user values (?, ?, ?, ?, ?);", req.Name, req.ID, req.Password, req.Address, req.Identification)
	if err != nil {
		c.JSON(http.StatusBadGateway, err)
	}
	c.JSON(http.StatusOK, gin.H{"message": "Register Success..."})
}
