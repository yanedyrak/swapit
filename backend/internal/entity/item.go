package entity

type Item struct {
	ID       string `json:"id" gorm:"primaryKey"`
	Name     string `json:"name"`
	Price    int    `json:"price"`
	Category string `json:"category"`

	UserID string `json:"user_id" gorm:"foreignKey:UserID"`
}
