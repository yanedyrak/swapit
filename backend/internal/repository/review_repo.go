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

func (r *ReviewRepo) Delete(review *entity.Review) error {
	if err := r.db.Delete(review).Error; err != nil {
		return err
	}
	return nil
}
