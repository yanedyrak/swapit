package entity

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Username string  `json:"username" gorm:"unique;not null"`
	Email    string  `json:"email" gorm:"unique;not null"`
	Password string  `json:"password" gorm:"not null"`
	Phone    string  `json:"phone" gorm:""`           // Телефон может быть уникальным, но необязательным
	Location string  `json:"location"`                // Локация необязательна
	Rating   float64 `json:"rating" gorm:"default:0"` // Значение по умолчанию для рейтинга

	Items   []Item   `json:"items" gorm:"foreignKey:UserID"`   // Связь "один ко многим" с Item
	Reviews []Review `json:"reviews" gorm:"foreignKey:UserID"` // Связь "один ко многим" с Review
}
