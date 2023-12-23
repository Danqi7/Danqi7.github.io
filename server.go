package main

import (
	"context"
	"errors"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
	//fmt.Fprintf(w, "Hello, Danqi!")
	w.Write([]byte("Hello, Danqi!"))
}

func aboutHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("./src/public/about.html"))
	tmpl.Execute(w, nil)

	// w.Header().Set("Content-Type", "text/html")
	// // open src/public/about.html
	// if page, err := os.ReadFile("./src/public/about.html"); err != nil {
	// 	w.WriteHeader(http.StatusInternalServerError)
	// } else {
	// 	w.WriteHeader(http.StatusOK)
	// 	w.Write(page)
	// }
}

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	server := &http.Server{Addr: ":8080", Handler: r}

	r.Get("/", homeHandler)
	r.Get("/about", aboutHandler)
	//r.Handle("/about.html", http.FileServer(http.Dir("./src/public/")))

	fmt.Println("Starting server...")
	go func() {
		if err := server.ListenAndServe(); !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("HTTP server error: %v", err)
		}
		log.Println("Stopped serving new connections.")
	}()

	// Wait for interrupt signal to gracefully shutdown the server
	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)
	<-sigChan

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := server.Shutdown(ctx); err != nil {
		log.Fatalf("HTTP server shutdown error: %v", err)
	}

	log.Println("Graceful shutdown complete.")
}
