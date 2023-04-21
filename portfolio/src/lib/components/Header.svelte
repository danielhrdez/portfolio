<script lang="ts">
  import danielPng from '$lib/images/daniel.png';
  import settingsIcon from '$lib/images/settings-btn.svg';

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

<header class="flex justify-around p-1">
  <img src={danielPng} alt="daniel" class="w-10" />
  <nav class="flex justify-around items-center container">
    <a href="/">Home</a>
    <a href="/tech">Technologies</a>
    <a href="/experience">Experience</a>
    <a href="/academic">Academic</a>
    <a href="/projects">Projects</a>
  </nav>
  <button on:click={settingsExpand}>
    <img src={settingsIcon} alt="settings" class="w-6" />
  </button>
</header>
