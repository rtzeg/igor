/**
 * Runtime environment variables.
 *
 * Variables are read from import.meta.env (Vite .env files).
 * In production, VITE_* vars are baked in at build time.
 *
 * To add a new variable:
 * 1. Add to .env.example
 * 2. Add to interface EnvConfig below
 * 3. Add to the env object below
 */

interface EnvConfig {
  VITE_API_BASE_URL: string
  VITE_APP_NAME: string
  VITE_DEFAULT_LOCALE: string
}

const env: EnvConfig = {
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  VITE_APP_NAME: import.meta.env.VITE_APP_NAME || 'MyApp',
  VITE_DEFAULT_LOCALE: import.meta.env.VITE_DEFAULT_LOCALE || 'ru',
}

export function getEnv<K extends keyof EnvConfig>(key: K): EnvConfig[K] {
  return env[key]
}

export default env
