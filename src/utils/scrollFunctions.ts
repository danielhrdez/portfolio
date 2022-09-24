/**
 * @function disableScroll disables the scroll of the page.
 * @description This function disables the scroll.
 * @returns {void} This function returns nothing.
 */
export function disableScroll(): void {
  const htmlBody = document.querySelector('html, body') as HTMLElement;
  if (htmlBody === null) {
    throw new Error('The html or body tag is not found');
  }
  htmlBody.style.overflow = 'hidden';
}

/**
 * @function enableScroll enables the scroll of the page.
 * @description This function enables the scroll.
 * @returns {void} This function returns nothing.
 */
export function enableScroll(): void {
  const htmlBody = document.querySelector('html, body') as HTMLElement;
  if (htmlBody === null) {
    throw new Error('The html or body tag is not found');
  }
  htmlBody.style.overflow = 'auto';
}

export default {
  disableScroll,
  enableScroll,
};
