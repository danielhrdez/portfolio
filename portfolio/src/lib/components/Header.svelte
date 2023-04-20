<script lang="ts">
  import danielPng from '$lib/images/daniel.png';

  /**
   * @function disableScroll disables the scroll of the page.
   * @description This function disables the scroll.
   * @returns {void} This function returns nothing.
   */
  function disableScroll(): void {
    const htmlBody = document.querySelector('html, body') as HTMLElement;
    if (htmlBody === null) {
      throw new Error('The html or body tag is not found');
    }
    htmlBody.style.overflow = 'hidden';
  }

  function settingsExpand(): void {
    document.querySelector('.settings')?.classList.add('show');
    disableScroll();
  };
</script>

<nav>
  <img src={danielPng} alt="daniel" />
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/experience">Experience</a>
  <a href="/projects">Projects</a>
  <button on:click={settingsExpand}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M3 13h18v-2h-18v2zm0 5h18v-2h-18v2zm0-10h18v-2h-18v2zm0-7v2h18v-2h-18z" />
    </svg>
  </button>
</nav>

<style>
  nav {
    background-color: rgb(var(--color-primary));
    color: rgb(var(--color-text));
    text-align: center;
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: var(--header-size);
    left: 0;
    top: 0;
    width: 100%;
    height: var(--header-size);
  }

  nav a {
    color: rgb(var(--color-text));
    text-decoration: none;
    font-size: 1.5rem;
  }

  nav a:hover {
    color: rgb(var(--color-text-hover));
  }

  nav a:active {
    color: rgb(var(--color-text-active));
  }

  nav img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    margin: 0.5rem;
  }
</style>
