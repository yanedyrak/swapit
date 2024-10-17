package main

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/config"
	"github.com/yanedyrak/swapit/internal/infrastructure/db"
	"github.com/yanedyrak/swapit/internal/infrastructure/module"
	"strconv"
)

func main() {
	router := gin.Default()
	cfg := config.GetConfig()
	database := db.NewPostgresDB()

	module.InitUserModule(database, router)

	if err := router.Run(":" + strconv.Itoa(cfg.Listen.Port)); err != nil {
		panic(err)
	}
}

// func main() {
