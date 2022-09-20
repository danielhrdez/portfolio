/**
 * @author Daniel Hernández de León
 * @file constants.ts
 * @description This is the file with the constants of the website
 */

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

export enum Language {
  ENGLISH = 'en',
  SPANISH = 'es',
};

export default {
  LocalItem,
  ThemeType,
  Language,
};
