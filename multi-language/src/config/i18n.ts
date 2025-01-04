import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDectector from 'i18next-browser-languagedetector';
// common translation files
import en from '../locales/en.json';
import es from '../locales/es.json';
// component translation
import hero_section_en from '../locales/components/heroSection/en.json';
import hero_section_es from '../locales/components/heroSection/es.json';

i18n
    .use(LanguageDectector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { 
                common: en,
                hero_section: hero_section_en
            },
            es: { 
                common: es,
                hero_section: hero_section_es
            }
        },
        fallbackLng: 'en',
        detection: {
            order: ['path', 'cookie', 'localStorage', 'navigator'],
            lookupFromPathIndex: 0
        },
        interpolation: {
            escapeValue: false
        },
        ns: ['common', 'hero_section'],
        defaultNS: 'common'
    });

export default i18n;