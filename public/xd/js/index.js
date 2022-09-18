/**
 * @author Daniel Hernández de León
 * @file index.js
 * @description This is the main function of the website
 */

import {LocalItem, ThemeType} from './constants.js';

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
  const navLinks = document.getElementById('nav-links');
  navLinks.childNodes.forEach((link) => {
    link.addEventListener('click', () => {
      active(link);
    });
  });
};

/**
 * @desc This function is used to change the theme of the website
 * @return {void} This function doesn't return anything
 */
function toggleTheme() {
  let theme = localStorage.getItem(LocalItem.THEME);
  if (theme === ThemeType.DARK) {
    theme = ThemeType.LIGHT;
  } else {
    theme = ThemeType.DARK;
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(LocalItem.THEME, theme);
};

/**
 * @desc This function is used to add the onclick event to the theme button
 * @return {void} This function doesn't return anything
 */
function addThemeEvent() {
  const themeButton = document.getElementById('settings-btn');
  themeButton.addEventListener('click', () => {
    toggleTheme();
  });
};

function settingsExpand() {
  const settings = document.getElementById('settings-btn');
  const settingsMenu = document.getElementById('settings');
  settings.addEventListener('click', () => {
    settingsMenu.classList.add('show');
    disableScroll();
  });
};

function settingsCollapse() {
  const exit = document.getElementById('settings-exit');
  const settingsMenu = document.getElementById('settings');
  exit.addEventListener('click', () => {
    settingsMenu.classList.remove('show');
    enableScroll();
  });
};

function disableScroll() {
  const htmlBody = document.querySelector('html, body');
  htmlBody.style.overflow = 'hidden';
};

function enableScroll() {
  const htmlBody = document.querySelector('html, body');
  htmlBody.style.overflow = 'auto';
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
  addActiveEvents();
  detectColorScheme();
  addThemeEvent();
  settingsExpand();
  settingsCollapse();
  document.addEventListener("DOMContentLoaded", () => document.body.className = "");
};

export default main;
