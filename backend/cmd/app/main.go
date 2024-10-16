package main

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/config"
	"strconv"
)

func main() {
	router := gin.Default()
	cfg := config.GetConfig()
	if err := router.Run(":" + strconv.Itoa(cfg.Listen.Port)); err != nil {
		panic(err)
	}
}
