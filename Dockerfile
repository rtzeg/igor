# ============================================
# Stage 1: Install dependencies
# ============================================
FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# ============================================
# Stage 2: Build application
# ============================================
FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# ============================================
# Stage 3: Production image with nginx
# ============================================
FROM nginx:1.27-alpine AS production

# Удаляем дефолтный конфиг nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем конфиг nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранное приложение
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем скрипт для инъекции env-переменных
COPY scripts/env.sh /docker-entrypoint.d/40-env-config.sh
RUN chmod +x /docker-entrypoint.d/40-env-config.sh

EXPOSE 80

# nginx:alpine образ автоматически запускает скрипты из /docker-entrypoint.d/
CMD ["nginx", "-g", "daemon off;"]
