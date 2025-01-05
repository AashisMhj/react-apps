import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDectector from 'i18next-browser-languagedetector';
// common translation files
import en from '../locales/common/en.json';
import es from '../locales/common/es.json';
import ja from '../locales/common/ja.json';
import ar from '../locales/common/ar.json';
import he from '../locales/common/he.json';
// component translation
// heroSection
import hero_section_en from '../locales/components/heroSection/en.json';
import hero_section_es from '../locales/components/heroSection/es.json';
import hero_section_ja from '../locales/components/heroSection/ja.json';
import hero_section_ar from '../locales/components/heroSection/ar.json';
import hero_section_he from '../locales/components/heroSection/he.json';
// pricing section
import pricing_section_en from '../locales/components/pricingSection/en.json';
import pricing_section_es from '../locales/components/pricingSection/es.json';
import pricing_section_ja from '../locales/components/pricingSection/ja.json';
import pricing_section_ar from '../locales/components/pricingSection/ar.json';
import pricing_section_he from '../locales/components/pricingSection/he.json';


i18n
    .use(LanguageDectector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { 
                common: en,
                hero_section: hero_section_en,
                pricing_section: pricing_section_en
            },
            es: { 
                common: es,
                hero_section: hero_section_es,
                pricing_section: pricing_section_es
            },
            ja: {
                common: ja,
                hero_section: hero_section_ja,
                pricing_section: pricing_section_ja
            },
            ar: {
                common: ar,
                hero_section: hero_section_ar,
                pricing_section: pricing_section_ar
            },
            he: {
                common: he,
                hero_section: hero_section_he,
                pricing_section: pricing_section_he
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