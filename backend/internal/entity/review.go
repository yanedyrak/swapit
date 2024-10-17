package entity

type Review struct {
	ID     string `json:"id" gorm:"primaryKey"`
	Rating int    `json:"rating"`
	Text   string `json:"text"`

	UserID string `json:"user_id" gorm:"foreignKey:UserID"`
}
