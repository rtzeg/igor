import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import ru from '@/shared/locales/ru.json'
import en from '@/shared/locales/en.json'
import uz from '@/shared/locales/uz.json'

const selectedLanguage = localStorage.getItem('i18nextLng') || 'ru'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: ru,
      },
      en: {
        translation: en,
      },
      uz: {
        translation: uz,
      },
    },
    lng: selectedLanguage,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
