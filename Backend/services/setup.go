package services

import (
	"fmt"
	"log"

	"github.com/Nxwbtk/Chula-legal-tech/config"
	"github.com/Nxwbtk/Chula-legal-tech/handler/auth"
	"github.com/Nxwbtk/Chula-legal-tech/models"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func SetUpFiber(db *gorm.DB) *fiber.App {
	app := fiber.New()

	app.Use(cors.New())
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowMethods: "GET,POST,HEAD,PUT,DELETE,PATCH",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	authHandler := auth.NewSignInHandler(db)

	app.Post("/signIn",authHandler.SignIn)
	app.Post("/signUp",authHandler.SignUp)


	return app
}

func SetUpDB() (*gorm.DB, error) {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Shanghai",
		config.NewConfig().DB_HOST,
		config.NewConfig().DB_USER,
		config.NewConfig().DB_PASS,
		config.NewConfig().DB,
		config.NewConfig().DB_PORT)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	// model table
	if err := db.AutoMigrate(&models.User{}); err != nil {
		return nil, err
	}
	return db, err
}

func SetUpServer(app *fiber.App) {
	port := config.NewConfig().PORT
	log.Fatal(app.Listen(":" + port))
}
