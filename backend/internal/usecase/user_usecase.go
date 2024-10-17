package usecase

import "github.com/yanedyrak/swapit/internal/entity"

type UserRepo interface {
	Create(user *entity.User) error
	FindByEmail(email string) (*entity.User, error)
}

type UserUseCase struct {
	repo UserRepo
}

func NewUserUseCase(repo UserRepo) *UserUseCase {
	return &UserUseCase{repo: repo}
}

func (u *UserUseCase) CreateUser(user *entity.User) error {
	return u.repo.Create(user)
}
