<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import "../app.css";
</script>

<div class="h-screen flex flex-col">
  <Header />
  <main class="bg-gray-100 h-screen overflow-auto">
    <slot />
  </main>
  <Footer />
</div>
