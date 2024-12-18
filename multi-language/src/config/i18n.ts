import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDectector from 'i18next-browser-languagedetector';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json';

i18n
    .use(LanguageDectector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr },
            es: { translation: es }
        },
        fallbackLng: 'en',
        detection: {
            order: ['path', 'cookie', 'localStorage', 'navigator'],
            lookupFromPathIndex: 0
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;