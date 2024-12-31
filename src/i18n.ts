import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Load translations from a backend
  .use(LanguageDetector) // Detect language from the browser
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: "en", 
    supportedLngs: ["en", "fr"], 
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", 
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["cookie"], 
    },
  });

export default i18n;
