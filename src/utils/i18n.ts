import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// import all namespaces (for the default language, only)
import ns1 from "../locales/en/translation.json";
import ns2 from "../locales/pt/translation.json";

// Initialize i18next
i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "en", // language to use
    fallbackLng: "en", // use en if detected language is not available
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      en: { translation: ns1 },
      pt: { translation: ns2 },
    }
  });

export default i18next;