<script lang="ts">
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import Settings from '$components/Settings.svelte';
	import Loader from '$components/Loader.svelte';
	import '../app.css';
	import '$utils/i18n';
	import { isLoading } from 'svelte-i18n';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { locale } from 'svelte-i18n';
	import { preferences } from '$utils/storage';

	inject({ mode: dev ? 'development' : 'production' });

	let showSettings = false;
	let dark = false;
	let lang = 'en';
	let isLoaded = false;

	function toggleSettings() {
		showSettings = !showSettings;
	}

	onMount(async () => {
		dark = get(preferences).theme === 'dark';
		lang = get(preferences).lang;
		document.documentElement.classList.toggle('dark', dark);
		locale.set(lang);
		await isLoading;
		isLoaded = true;
	});
</script>

{#if !isLoaded}
	<Loader />
{:else}
	<Settings bind:show={showSettings} {dark} {lang} />
	<div class="h-screen flex flex-col">
		<Header on:settings={toggleSettings} />
		<main class="h-full overflow-auto">
			<slot />
		</main>
		<Footer />
	</div>
{/if}
