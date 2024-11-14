package user

import (
	"github.com/Nxwbtk/Chula-legal-tech/models"
	"gorm.io/gorm"
)

type DBHandler struct {
	DB *gorm.DB
}

func FindByUsername(username string,db *gorm.DB) (*models.User, error) {

	var user models.User

	result := db.Where("Username = ?", username).First(&user)
	if result.Error != nil {
		return nil, result.Error
	}
	return &user, nil
}

func (h *DBHandler) findByID(id int64) (*models.User, error) {

	var user models.User
	result := h.DB.Where("id = ?", id).First(&user)
	if result.Error != nil {
		return nil, result.Error
	}
	return &user, nil
}
