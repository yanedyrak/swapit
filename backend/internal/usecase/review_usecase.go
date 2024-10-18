package usecase

import "github.com/yanedyrak/swapit/internal/entity"

type ReviewRepo interface {
	Create(review *entity.Review) error
	Delete(review *entity.Review) error
}
type ReviewUseCase struct {
	repo ReviewRepo
}

func NewReviewUseCase(repo ReviewRepo) *ReviewUseCase {
	return &ReviewUseCase{repo: repo}
}

func (u *ReviewUseCase) Create(review *entity.Review) error {
	return u.repo.Create(review)
}

func (u *ReviewUseCase) Delete(review *entity.Review) error {
	return u.repo.Delete(review)
}
