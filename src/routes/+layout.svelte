<script lang="ts">
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import Settings from '$components/Settings.svelte';
	import '../app.css';
	import '$utils/i18n';
	import { isLoading } from 'svelte-i18n';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

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
		<main class="h-full overflow-auto">
			<slot />
		</main>
		<Footer />
	</div>
{/if}
