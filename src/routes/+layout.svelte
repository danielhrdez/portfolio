<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Settings from '$lib/components/Settings.svelte';
	import '../app.css';
	import '../lib/i18n';
	import { isLoading } from 'svelte-i18n';
	export const prerender = true;

	let showSettings = false;

	function toggleSettings() {
		showSettings = !showSettings;
	}
</script>

{#if $isLoading}
	Please wait...
{:else}
	<Settings bind:show={showSettings} />
	<div class="h-screen flex flex-col">
		<Header on:settings={toggleSettings} />
		<main class="h-screen overflow-auto">
			<slot />
		</main>
		<Footer />
	</div>
{/if}
