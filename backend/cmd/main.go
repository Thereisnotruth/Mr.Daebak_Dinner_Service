package main

import (
	"github.com/Thereisnotruth/Mr.Daebak_Dinner_Service/pkg/db"
	t "github.com/Thereisnotruth/Mr.Daebak_Dinner_Service/pkg/v1"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	db.DBInit()
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "hi",
		})
	})
	v1 := router.Group("/v1")
	{
		v1.POST("/login", t.Login)
		v1.POST("/register", t.Register)
		v1.POST("/logout", t.Logout)
		v1.POST("/order", t.Order)
		v1.GET("/check", t.CheckOrder)
		v1.GET("/check/:id", t.PrevOrder)
	}
	router.Run(":3002")
}
