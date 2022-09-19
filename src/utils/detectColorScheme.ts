import { LocalItem, ThemeType } from '../data/constants';

export function detectColorScheme(): void {
  let theme = String(ThemeType.DARK);
  const localTheme = localStorage.getItem(LocalItem.THEME);
  if (localTheme !== null) {
    theme = localTheme;
  } else if (
    window.matchMedia(`(prefers-color-scheme: ${ThemeType.LIGHT})`).matches
  ) {
    theme = ThemeType.LIGHT;
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(LocalItem.THEME, theme);
};

export default detectColorScheme;
