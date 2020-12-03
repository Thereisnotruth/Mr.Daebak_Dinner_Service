package main

import (
	"github.com/Thereisnotruth/Mr.Daebak_Dinner_Service/pkg/db"
	t "github.com/Thereisnotruth/Mr.Daebak_Dinner_Service/pkg/v1"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(static.Serve("/", static.LocalFile("../../frontend/build", true)))
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
		v1.POST("/order", t.PostOrder)
		v1.POST("/userInfo", t.ModifyUserInfo)
		v1.POST("/manage/:time", t.Done)
		v1.GET("/order", t.GetOrder)
		v1.GET("/userInfo", t.GetUserInfo)
		v1.GET("/manage", t.Manage)
	}
	router.Run(":3002")
}
