<script lang="ts">
  import danielPng from '$lib/images/daniel.png';
  import settingsIcon from '$lib/images/settings-btn.svg';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function toggleSettings() {
    dispatch('settings');
  }
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
