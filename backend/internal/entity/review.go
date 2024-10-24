package entity

import "gorm.io/gorm"

type Review struct {
	gorm.Model
	Rating int    `json:"rating" gorm:"not null"`
	Text   string `json:"text"`

	UserID uint `json:"user_id"` // Внешний ключ, который автоматически ссылается на поле ID из таблицы пользователей
}
