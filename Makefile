DC := docker compose

.PHONY: up down build logs restart bash clean install start lint format check test preview env

# ==========================================
# Docker (сборка и деплой)
# ==========================================
up:
	$(DC) up -d --build

down:
	$(DC) down

down-v:
	$(DC) down -v

build:
	$(DC) build --no-cache

logs:
	$(DC) logs -f

restart:
	$(DC) restart

bash:
	$(DC) exec frontend sh

# ==========================================
# Локальная разработка
# ==========================================
install:
	npm ci

start:
	npm run dev

lint:
	npm run lint

format:
	npm run format

check:
	npm run check

test:
	npm run test

preview:
	npm run build && npm run preview

# ==========================================
# Утилиты
# ==========================================
clean:
	rm -rf node_modules dist

env:
	@test -f .env || (cp .env.example .env && echo ".env created from .env.example")
