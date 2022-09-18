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
function active(link) {
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
function addActiveEvents() {
  const navLinks = document.querySelector('.header__nav-links');
  console.log(navLinks);
  navLinks.childNodes.forEach((link) => {
    link.addEventListener('click', () => {
      active(link);
    });
  });
};

/**
 * @desc This function is used to detect the color scheme of the user
 * and set the theme of the website
 * @return {void} This function doesn't return anything
 */
function detectColorScheme() {
  let theme = ThemeType.DARK;
  const localTheme = localStorage.getItem(LocalItem.THEME);
  if (localTheme) {
    theme = localTheme;
  } else if (
    window.matchMedia(`(prefers-color-scheme: ${ThemeType.LIGHT})`).matches
  ) {
    theme = ThemeType.LIGHT;
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(LocalItem.THEME, theme);
};

/**
 * @desc This function is the main function of the website
 * @return {void} This function doesn't return anything
 */
function main() {
  document.addEventListener('DOMContentLoaded', () => {
    detectColorScheme();
    addThemeEvent();
    settingsExpand();
    settingsCollapse();
    document.body.className = "";
    addActiveEvents();
  });
};

export default main;
