export function disableScroll(): void {
  const htmlBody = document.querySelector('html, body') as HTMLElement;
  if (htmlBody === null) {
    throw new Error('The html or body tag is not found');
  }
  htmlBody.style.overflow = 'hidden';
};

export function enableScroll(): void {
  const htmlBody = document.querySelector('html, body') as HTMLElement;
  if (htmlBody === null) {
    throw new Error('The html or body tag is not found');
  }
  htmlBody.style.overflow = 'auto';
};

export default {
  disableScroll,
  enableScroll,
};
