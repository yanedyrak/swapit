package entity

type User struct {
	ID       string  `json:"id" gorm:"primaryKey"`
	Username string  `json:"username" gorm:"unique;not null"`
	Email    string  `json:"email" gorm:"unique;not null"`
	Password string  `json:"password"`
	Phone    string  `json:"phone" gorm:"unique"`
	Location string  `json:"location"`
	Rating   float64 `json:"rating" gorm:"default:0"`

	Items   []Item   `json:"items" gorm:"foreignKey:UserID"`
	Reviews []Review `json:"reviews" gorm:"foreignKey:UserID"`
}
