import LanguageJSON from '../data/language.json';
import getLanguage from './getLanguage';

const lang = getLanguage();

/**
 * @desc Get the language string of the current language
 * @param {string} key - The key of the language string
 * @returns {string} The language string
 */
function language(key: keyof typeof LanguageJSON): string {
  return LanguageJSON[key][lang];
}

export default language;
