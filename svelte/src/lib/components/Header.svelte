<script lang="ts">
  import danielPng from '$lib/images/daniel.png';
  import settingsIcon from '$lib/images/settings-btn.svg';
  import { createEventDispatcher } from 'svelte';
  import { t } from 'svelte-i18n';

  const dispatch = createEventDispatcher();

  function toggleSettings() {
    dispatch('settings');
  }
</script>

<header class="
  flex
  justify-around
  p-1
  bg-neutral-100
  dark:bg-neutral-600
  drop-shadow-sm
">
  <img src={danielPng} alt="daniel" class="w-10" />
  <nav class="flex justify-around items-center container">
    <a href="/">
      {$t('page.home.title')}
    </a>
    <a href="/tech">
      {$t('page.tech.title')}
    </a>
    <a href="/experience">
      {$t('page.experience.title')}
    </a>
    <a href="/academic">
      {$t('page.academic.title')}
    </a>
    <a href="/projects">
      {$t('page.projects.title')}
    </a>
  </nav>
  <button on:click={toggleSettings}>
    <img src={settingsIcon} alt="settings" class="w-6" />
  </button>
</header>

<style>
  a {
    text-decoration: none;
    color: var(--neutral-900);
  }
</style>
