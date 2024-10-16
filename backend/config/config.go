package config

import (
	"github.com/ilyakaznacheev/cleanenv"
	"sync"
)

type Config struct {
	IsDevelopment bool `env:"IS_DEVELOPMENT" env-default:"false"`
	Listen        struct {
		Host string `env:"LISTEN_HOST" env-default:"0.0.0.0"`
		Port int    `env:"LISTEN_PORT" env-default:"8080"`
	}
}

var once sync.Once
var config *Config

func GetConfig() *Config {
	once.Do(func() {
		config = &Config{}
		if cleanenv.ReadEnv(config) != nil {
			panic("failed to read config")
		}
	})
	return config
}
