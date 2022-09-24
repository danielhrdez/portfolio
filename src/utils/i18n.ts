import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import LanguageJSON from '../data/language.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    // resources: {
    //   en: {
    //     translation: {
    //       // here we will place our translations...
    //     }
    //   }
    // }
    resources: LanguageJSON,
  })
  .catch((err) => {
    throw new Error(err);
  });

export default i18n;
