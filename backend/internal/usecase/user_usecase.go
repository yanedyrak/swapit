package usecase

import "github.com/yanedyrak/swapit/internal/entity"

type UserRepo interface {
	FindByID(id uint) (*entity.User, error)
}

type UserUseCase struct {
	repo UserRepo
}

func NewUserUseCase(repo UserRepo) *UserUseCase {
	return &UserUseCase{repo: repo}
}

func (u *UserUseCase) FindByID(id uint) (*entity.User, error) {
	return u.repo.FindByID(id)
}
