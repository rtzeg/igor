#!/bin/sh

# Генерирует /usr/share/nginx/html/env-config.js из переменных окружения.
# Этот файл подключается в index.html и делает переменные доступными
# через window.__ENV__ в runtime (без пересборки).
#
# Чтобы добавить новую переменную:
# 1. Добавьте её в .env.example
# 2. Добавьте строку ниже по аналогии с существующими
# 3. Используйте в коде через getEnv("VITE_MY_VAR")

cat <<EOF > /usr/share/nginx/html/env-config.js
window.__ENV__ = {
  VITE_API_BASE_URL: "${VITE_API_BASE_URL}",
  VITE_APP_NAME: "${VITE_APP_NAME}",
  VITE_DEFAULT_LOCALE: "${VITE_DEFAULT_LOCALE}",
};
EOF

echo "env-config.js generated with runtime environment variables"
