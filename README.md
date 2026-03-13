# Tezshifo Frontend

React + TypeScript + Vite. Раздача через nginx в Docker.

## Требования

- **Node.js** 22+ и **npm** (для локальной разработки)
- **Docker** и **Docker Compose** (для сборки и деплоя)
- **Make** (опционально, для удобных команд)

## Быстрый старт

### 1. Клонировать и настроить окружение

```bash
git clone <repo-url> && cd tezshifo-frontend
cp .env.example .env   # или: make env
```

Отредактируйте `.env` под свои нужды:

| Переменная | Описание | По умолчанию |
|---|---|---|
| `APP_PORT` | Порт, на котором будет доступен сайт | `3000` |
| `VITE_API_BASE_URL` | URL бэкенд-API | `http://localhost:8000` |
| `VITE_APP_NAME` | Название приложения | `MyApp` |
| `VITE_DEFAULT_LOCALE` | Язык по умолчанию (`ru`, `en`, `uz`) | `ru` |

> Переменные с префиксом `VITE_` вшиваются в бандл на этапе сборки.

### 2a. Локальная разработка (без Docker)

```bash
npm ci          # установить зависимости (или: make install)
npm run dev     # запустить dev-сервер на http://localhost:3000 (или: make start)
```

### 2b. Запуск через Docker (сборка + nginx)

```bash
make up         # собрать образ и запустить контейнер
                # или: docker compose up -d --build
```

Приложение будет доступно на `http://localhost:${APP_PORT}` (по умолчанию `http://localhost:3000`).

## Команды

### Docker

| Команда | Описание |
|---|---|
| `make up` | Собрать и запустить контейнер |
| `make down` | Остановить контейнер |
| `make down-v` | Остановить и удалить volumes |
| `make build` | Пересобрать без кэша |
| `make logs` | Просмотр логов |
| `make restart` | Перезапустить контейнер |
| `make bash` | Зайти в контейнер |

### Локальная разработка

| Команда | Описание |
|---|---|
| `make install` | Установить зависимости (`npm ci`) |
| `make start` | Dev-сервер с HMR |
| `make lint` | Проверка линтером (ESLint) |
| `make format` | Форматирование (Prettier) |
| `make check` | Форматирование + линтер с авто-фиксом |
| `make test` | Запуск тестов (Vitest) |
| `make preview` | Сборка + предпросмотр продакшн-билда |
| `make clean` | Удалить `node_modules` и `dist` |

## Структура проекта

```
src/
  entities/           # Доменные сущности
  features/           # Фичи (каждая в своей папке)
    language-switcher/
  pages/              # Страницы
  shared/             # Переиспользуемое
    constants/        # Константы
    lib/              # Утилиты (cn и пр.)
    locales/          # Переводы (ru, en, uz)
    shadcn-ui/        # shadcn/ui компоненты
    styles/           # Глобальные стили (global.css)
    types/            # Общие типы
  widgets/            # Виджеты (композиция фич)
```

## Стек

- **React 19** + **TypeScript**
- **Vite 7** (сборка и dev-сервер)
- **Tailwind CSS 4** + **shadcn/ui**
- **TanStack Router** (маршрутизация)
- **TanStack Query** (управление серверным состоянием)
- **i18next** (интернационализация: ru, en, uz)
- **Vitest** (тестирование)
- **ESLint** + **Prettier** (качество кода)
- **Docker** + **nginx** (продакшн-деплой)
