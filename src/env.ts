/**
 * Runtime environment variables.
 *
 * В Docker env vars инжектируются через env-config.js (window.__ENV__)
 * при старте контейнера, без пересборки приложения.
 *
 * В dev-режиме используются переменные из import.meta.env (файл .env).
 *
 * Чтобы добавить новую переменную:
 * 1. Добавьте в .env.example
 * 2. Добавьте в scripts/env.sh
 * 3. Добавьте в interface EnvConfig ниже
 * 4. Добавьте в объект env ниже
 */

interface EnvConfig {
  VITE_API_BASE_URL: string
  VITE_APP_NAME: string
  VITE_DEFAULT_LOCALE: string
}

declare global {
  interface Window {
    __ENV__?: Partial<EnvConfig>
  }
}

const env: EnvConfig = {
  VITE_API_BASE_URL:
    window.__ENV__?.VITE_API_BASE_URL ||
    import.meta.env.VITE_API_BASE_URL ||
    'http://localhost:8000',
  VITE_APP_NAME:
    window.__ENV__?.VITE_APP_NAME ||
    import.meta.env.VITE_APP_NAME ||
    'MyApp',
  VITE_DEFAULT_LOCALE:
    window.__ENV__?.VITE_DEFAULT_LOCALE ||
    import.meta.env.VITE_DEFAULT_LOCALE ||
    'ru',
}

export function getEnv<K extends keyof EnvConfig>(key: K): EnvConfig[K] {
  return env[key]
}

export default env
