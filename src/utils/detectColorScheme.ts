import { LocalItem, ThemeType } from '../data/constants';

/**
 * @desc This function returns the color scheme of the page.
 * @returns {ThemeType} This function returns the color scheme of the page.
 */
function detectColorScheme(): ThemeType {
  let theme = ThemeType.DARK;
  const localTheme = localStorage.getItem(LocalItem.THEME) as ThemeType;
  if (localTheme !== null) {
    theme = localTheme;
  } else if (
    window.matchMedia(`(prefers-color-scheme: ${ThemeType.LIGHT})`).matches
  ) {
    theme = ThemeType.LIGHT;
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(LocalItem.THEME, theme);
  return theme;
}

export default detectColorScheme;
