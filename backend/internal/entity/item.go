package entity

import "gorm.io/gorm"

type Item struct {
	gorm.Model
	Name     string `json:"name" gorm:"not null"`
	Price    int    `json:"price" gorm:"not null"`
	Category string `json:"category"`

	UserID uint `json:"user_id"` // Внешний ключ, который автоматически ссылается на поле ID из таблицы пользователей
}
