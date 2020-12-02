package db

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

var dbName = "daebak"

func DBInit() {
	conn, err := sql.Open("mysql", "root:1234@tcp(127.0.0.1:3306)/")

	if err != nil {
		fmt.Println(err.Error())
	}

	defer conn.Close()

	// DB 생성
	_, err = conn.Exec("create database if not exists " + dbName)
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("Successfully created databse..")
	}

	// DB 선택
	_, err = conn.Exec("Use " + dbName)
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("DB selected successfully..")
	}

	// 테이블 생성
	_, err = conn.Exec("create Table if not exists user(name varchar(20) not null, user_id varchar(20) not null, user_pw varchar(20) not null, user_address varchar(20) not null, identity varchar(20) not null);")
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("User Table created successfully..")
	}
	_, err = conn.Exec("CREATE Table if not exists prev_order(user_id varchar(20) not null, order_id int not null);")
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("Prev Order Table created successfully..")
	}

	_, err = conn.Exec("CREATE Table if not exists orders(user_id varchar(20) not null, order_id int not null, order_menu varchar(20) not null, order_style varchar(20) not null);")
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("Order Table created successfully..")
	}
}
