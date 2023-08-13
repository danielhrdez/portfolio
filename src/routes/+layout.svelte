<script lang="ts">
	import Loader from '$components/Loader.svelte';
	import WavesCanvas from '$components/WavesCanvas.svelte';
	import Header from '$components/Header.svelte';
	import Settings from '$components/Settings.svelte';
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { locale, isLoading } from 'svelte-i18n';
	import { Theme, preferences, Lang } from '$utils/storage';
	import '$utils/i18n';

	inject({ mode: dev ? 'development' : 'production' });

	let showSettings = false;
	let dark = false;
	let lang = Lang.ENGLISH;
	let isLoaded = false;
	$: useLoader = !isLoaded || $isLoading;

	function toggleSettings() {
		showSettings = !showSettings;
	}

	onMount(async () => {
		const theme = get(preferences).theme;
		switch (theme) {
			case Theme.DARK:
				dark = true;
				break;
			case Theme.LIGHT:
				dark = false;
				break;
			default:
				dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				break;
		}
		lang = get(preferences).lang;
		document.documentElement.classList.toggle('dark', dark);
		locale.set(lang);
		isLoaded = true;
	});
</script>

<div class="h-screen flex flex-col div-color">
{#if useLoader}
	<Loader />
{:else}
	<Settings bind:show={showSettings} {dark} {lang} />
	<Header on:settings={toggleSettings} />
	<div class="h-full overflow-auto">
		<div class="flex gap-4 justify-center items-center h-full flex-wrap">
			<main class="flex flex-col gap-4 p-4 relative">
				<slot />
			</main>
		</div>
	</div>
{/if}
	<WavesCanvas />
</div>
