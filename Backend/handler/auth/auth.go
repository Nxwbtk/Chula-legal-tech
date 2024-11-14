package auth

import (
	"time"

	"github.com/Nxwbtk/Chula-legal-tech/config"
	"github.com/Nxwbtk/Chula-legal-tech/handler/user"
	"github.com/Nxwbtk/Chula-legal-tech/models"
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type AuthHandler struct {
	DB *gorm.DB
}

func NewSignInHandler(db *gorm.DB) *AuthHandler {
	return &AuthHandler{DB: db}
}

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func (h *AuthHandler) SignIn(c *fiber.Ctx) error {
	var input struct {
		Username string `json:"username" validate:"required"`
		Pass     string `json:"password" validate:"required"`
	}

	err := c.BodyParser(&input)

	if err != nil {
		return c.SendStatus(fiber.ErrBadRequest.Code)
	}

	v := validator.New()
	err = v.Struct(input)

	if err != nil {
		return c.Status(400).SendString("Missing required fields")
	}

	user, _ := user.FindByUsername(input.Username, h.DB)
	if user == nil {
		return c.Status(404).SendString("User not Found")
	}

	login := CheckPasswordHash(input.Pass, user.Pass)

	if login == false {
		return c.Status(401).SendString("Wrong Password")
	}

	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["Name"] = user.Name
	claims["role"] = user.Role
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

	t, err := token.SignedString([]byte(config.NewConfig().SECRET))
	if err != nil {
		return c.Status(500).SendString("Can not generate token")
	}

	return c.JSON(fiber.Map{
		"accessToken": t,
		"role":        user.Role,
		"id":          user.ID,
		"name":        user.Name,
	})
}

func (h *AuthHandler) SignUp(c *fiber.Ctx) error {
	var input struct {
		Username string `json:"username" validate:"required"`
		Pass     string `json:"password" validate:"required"`
		Name     string `json:"name" validate:"required"`
		Role     string `json:"role" validate:"required"`
	}

	err := c.BodyParser(&input)

	if err != nil {
		return c.SendStatus(fiber.ErrBadRequest.Code)
	}


	v := validator.New()
	err = v.Struct(input)

	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Missing required fields"})
	}

	var user models.User
	result := h.DB.Where("Username = ?", input.Username).First(&user)

	if result.Error == nil {
		return c.Status(409).SendString("Username already exists")
	}

	hashpass, err := HashPassword(input.Pass)

	if err != nil {
		return c.Status(500).SendString("Can not hash password")
	}

	newUser := models.User{
		Username: input.Username,
		Pass:     hashpass,
		Name:     input.Name,
		Role:     input.Role,
	}

	result = h.DB.Create(&newUser)

	if result.Error != nil {
		return c.Status(500).SendString("Can not Create NewUser")
	}
	return c.Status(200).SendString("User created successfully")

}
