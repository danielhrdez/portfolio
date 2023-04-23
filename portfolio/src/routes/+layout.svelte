<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Settings from '$lib/components/Settings.svelte';
  import "../app.css";

  let showSettings = false;
  
  function toggleSettings() {
    showSettings = !showSettings;
  }
</script>

<Settings bind:show={showSettings} />
<div class="h-screen flex flex-col">
  <Header on:settings={toggleSettings} />
  <main class="bg-neutral-200 dark:bg-neutral-800 h-screen overflow-auto">
    <slot />
  </main>
  <Footer />
</div>
