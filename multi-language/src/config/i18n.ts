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
// features section
import features_section_en from '../locales/components/featuresSection/en.json';
import features_section_es from '../locales/components/featuresSection/es.json';
import features_section_ja from '../locales/components/featuresSection/ja.json';
import features_section_ar from '../locales/components/featuresSection/ar.json';
import features_section_he from '../locales/components/featuresSection/he.json';
// about header section
import about_header_section_en from '../locales/components/aboutHeaderSection/en.json';
import about_header_section_es from '../locales/components/aboutHeaderSection/es.json';
import about_header_section_ja from '../locales/components/aboutHeaderSection/ja.json';
import about_header_section_ar from '../locales/components/aboutHeaderSection/ar.json';
import about_header_section_he from '../locales/components/aboutHeaderSection/he.json';


i18n
    .use(LanguageDectector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { 
                common: en,
                hero_section: hero_section_en,
                pricing_section: pricing_section_en,
                features_section: features_section_en,
                about_header_section: about_header_section_en,
            },
            es: { 
                common: es,
                hero_section: hero_section_es,
                pricing_section: pricing_section_es,
                features_section: features_section_es,
                about_header_section: about_header_section_es,
            },
            ja: {
                common: ja,
                hero_section: hero_section_ja,
                pricing_section: pricing_section_ja,
                features_section: features_section_ja,
                about_header_section: about_header_section_ja,
            },
            ar: {
                common: ar,
                hero_section: hero_section_ar,
                pricing_section: pricing_section_ar,
                features_section: features_section_ar,
                about_header_section: about_header_section_ar,
            },
            he: {
                common: he,
                hero_section: hero_section_he,
                pricing_section: pricing_section_he,
                features_section: features_section_he,
                about_header_section: about_header_section_he,
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