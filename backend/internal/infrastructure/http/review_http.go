package http

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/swapit/internal/entity"
	"net/http"
)

type ReviewUseCase interface {
	Create(review *entity.Review) error
	Delete(review *entity.Review) error
}
type ReviewHTTP struct {
	review ReviewUseCase
}

func NewReviewHTTP(review ReviewUseCase) *ReviewHTTP {
	return &ReviewHTTP{review: review}
}

func (h *ReviewHTTP) CreateReview(c *gin.Context) {
	var review entity.Review
	if err := c.ShouldBindJSON(&review); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := h.review.Create(&review); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, review)
}

func (h *ReviewHTTP) DeleteReview(c *gin.Context) {
	var review entity.Review
	if err := c.ShouldBindJSON(&review); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := h.review.Delete(&review); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
}
