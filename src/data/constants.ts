/**
 * @desc This enum is used to store the local storage items
 * @enum {string}
 * @readonly
 * @property {string} THEME The theme of the website
 * @property {string} LANGUAGE The language of the website
 */
export enum LocalItem {
  THEME = 'theme',
  LANGUAGE = 'language',
};

/**
 * @desc This enum is used to store the theme types
 * @enum {string}
 * @readonly
 * @property {string} DARK The dark theme
 * @property {string} LIGHT The light theme
 */
export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
};

/**
 * @desc This enum is used to store the languages
 * @enum {string}
 * @readonly
 * @property {string} ENGLISH The English language
 * @property {string} SPANISH The Spanish language
 */
export enum Language {
  ENGLISH = 'en',
  SPANISH = 'es',
};

export default {
  LocalItem,
  ThemeType,
  Language,
};
