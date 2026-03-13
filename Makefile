# Определение compose-файла: make dev <command> или make <command>
ifeq ($(firstword $(MAKECMDGOALS)),dev)
  COMPOSE_FILE := -f docker-compose.dev.yml
  ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(ARGS):;@:)
else
  COMPOSE_FILE :=
endif

DC := docker compose $(COMPOSE_FILE)

.PHONY: dev up down build logs restart bash clean

dev: ;

# ==========================================
# Compose
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

# ==========================================
# Контейнер
# ==========================================
bash:
	$(DC) exec frontend sh

# ==========================================
# Разработка (без Docker)
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
