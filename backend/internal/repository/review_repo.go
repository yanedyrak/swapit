package repository

import (
	"github.com/yanedyrak/swapit/internal/entity"
	"gorm.io/gorm"
)

type ReviewRepo struct {
	db *gorm.DB
}

func NewReviewRepo(db *gorm.DB) *ReviewRepo {
	return &ReviewRepo{db: db}
}

func (r *ReviewRepo) Create(review *entity.Review) error {
	if err := r.db.Create(review).Error; err != nil {
		return err
	}
	return nil
}

func (r *ReviewRepo) FindByUserID(userID string) ([]entity.Review, error) {
	var reviews []entity.Review
	if err := r.db.Where("user_id = ?", userID).Find(&reviews).Error; err != nil {
		return nil, err
	}
	return reviews, nil
}
