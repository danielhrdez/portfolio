import detectColorScheme from './detectColorScheme';

/**
 * @desc This function loads before the page is loaded.
 * @returns {void} This function returns nothing.
 */
export function beforeLoad(): void {
  detectColorScheme();
}

/**
 * @desc This function loads after the page is loaded.
 * @returns {void} This function returns nothing.
 */
export function afterLoad(): void {
  document.body.className = '';
}

export default {
  beforeLoad,
  afterLoad,
};
