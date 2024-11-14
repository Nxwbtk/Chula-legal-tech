package main

import (
	"github.com/Nxwbtk/Chula-legal-tech/services"
)

func main() {

	db,err := services.SetUpDB()

	if (err != nil){
		panic(err)
	}
	app := services.SetUpFiber(db)
	services.SetUpServer(app)
}
