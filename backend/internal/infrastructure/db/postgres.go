package db

import (
	"github.com/yanedyrak/swapit/internal/entity"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
)

func NewPostgresDB() *gorm.DB {
	dsn := "host=localhost user=postgres password=europe dbname=swapit port=5432 sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("failed to connect database", err)
	}
	if err := db.AutoMigrate(&entity.User{}, &entity.Item{}, &entity.Review{}); err != nil {
		log.Fatal("failed to migrate database", err)
	}
	return db
}
