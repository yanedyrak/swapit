package repository

import (
	"github.com/yanedyrak/swapit/internal/entity"
	"gorm.io/gorm"
)

type UserRepo struct {
	db *gorm.DB
}f

func NewUserRepo(db *gorm.DB) *UserRepo {
	return &UserRepo{db: db}
}

func (r *UserRepo) FindByID(id uint) (*entity.User, error) {
	var user entity.User
	if err := r.db.Where("id = ?", id).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}
