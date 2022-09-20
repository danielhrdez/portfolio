import { Language } from "../data/constants";

export const getLanguage = (): Language => {
  const language = localStorage.getItem('language');
  if (language !== null) {
    return language.substring(0, 2) as Language;
  }
  const browserLanguage = navigator.language;
  if (browserLanguage !== null) {
    return browserLanguage.substring(0, 2) as Language;
  }
  return Language.ENGLISH;
}

export default getLanguage;
