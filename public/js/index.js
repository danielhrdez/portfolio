/**
 * @author Daniel Hernández de León
 * @file index.js
 * @description This is the main function of the website
 */

/**
 * @desc This function is used to add the active class to the current link
 * @param {HTMLElement} link The link to add the active class
 * @return {void} This function doesn't return anything
 */
const active = (link) => {
  const activeString = 'active';
  const activeNode = link.parentNode.querySelector('.' + activeString);
  if (activeNode) {
    activeNode.classList.remove(activeString);
  }
  link.classList.add(activeString);
};

/**
 * @desc This function is used to add the onclick event to the links
 * @return {void} This function doesn't return anything
 */
const addActiveEvents = () => {
  const navLinks = document.querySelectorAll('.nav-link')[0];
  navLinks.childNodes.forEach((link) => {
    link.addEventListener('click', () => {
      active(link);
    });
  });
};

const ThemeType = {
  LIGHT: 'light',
  DARK: 'dark',
};

const Items = {
  THEME: 'theme',
  LANGUAGE: 'language',
};

/**
 * @desc This function is used to change the theme of the website
 * @return {void} This function doesn't return anything
 */
const toggleTheme = () => {
  let theme = localStorage.getItem(Items.THEME);
  if (theme == ThemeType.DARK) {
    theme = ThemeType.LIGHT;
  } else {
    theme = ThemeType.DARK;
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(Items.THEME, theme);
};

/**
 * @desc This function is used to add the onclick event to the theme button
 * @return {void} This function doesn't return anything
 */
const addThemeEvent = () => {
  const themeButton = document.getElementById('theme-btn');
  themeButton.addEventListener('click', () => {
    toggleTheme();
  });
};

/**
 * @desc This function is used to detect the color scheme of the user
 * and set the theme of the website
 * @return {void} This function doesn't return anything
 */
const detectColorScheme = () => {
  let theme = ThemeType.DARK;
  const localTheme = localStorage.getItem(Items.THEME);
  if (localTheme) {
    theme = localTheme;
  } else if (
    window.matchMedia(`(prefers-color-scheme: ${ThemeType.LIGHT})`).matches
  ) {
    theme = ThemeType.LIGHT;
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(Items.THEME, theme);
};

/**
 * @desc This function is the main function of the website
 * @return {void} This function doesn't return anything
 */
const main = () => {
  addActiveEvents();
  detectColorScheme();
  addThemeEvent();
};

main();
