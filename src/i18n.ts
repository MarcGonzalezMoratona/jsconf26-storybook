import i18n, { type i18n as I18nType } from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import es from "./locales/es/common.json";
import en from "./locales/en/common.json";

export const languageMap = {
  en: "English",
  es: "Español",
};

export const resources = {
  en: {
    common: en,
  },
  es: {
    common: es,
  },
};

// const isTest =
//   (typeof import.meta !== "undefined" && (import.meta as any).vitest) ||
//   process.env.VITEST === "true" ||
//   process.env.NODE_ENV === "test";

const i18nInstance: I18nType = i18n.createInstance();

// if (!isTest) {
i18nInstance.use(Backend).use(LanguageDetector);
// }

i18nInstance.use(initReactI18next).init({
  // lng: isTest ? "en" : undefined,
  fallbackLng: "en",
  resources,
  ns: ["common"],
  defaultNS: "common",
  //react: { useSuspense: !isTest },
  react: { useSuspense: true },
  /* interpolation: {
      escapeValue: false,
    }, */
});

export default i18nInstance;
