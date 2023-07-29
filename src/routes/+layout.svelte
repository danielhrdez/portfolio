<script lang="ts">
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import Settings from '$components/Settings.svelte';
	import Loader from '$components/Loader.svelte';
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { locale, isLoading } from 'svelte-i18n';
	import { Theme, preferences } from '$utils/storage';
	import { Lang } from '$utils/i18n';

	inject({ mode: dev ? 'development' : 'production' });

	let showSettings = false;
	let dark = false;
	let lang = Lang.ENGLISH;
	let isLoaded = false;

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

{#if !isLoaded || $isLoading}
	<Loader />
{:else}
	<Settings bind:show={showSettings} {dark} {lang} />
	<div class="h-screen flex flex-col">
		<Header on:settings={toggleSettings} />
		<main class="h-full overflow-auto mb-10">
			<div class="flex gap-4 justify-center items-center h-full flex-wrap">
				<div class="flex md:flex-row flex-col gap-4 p-4">
					<slot />
				</div>
			</div>
		</main>
		<Footer />
	</div>
{/if}
