<script lang="ts">
	import Loader from '$components/Loader.svelte';
	import WavesCanvas from '$components/WavesCanvas.svelte';
	import Header from '$components/Header.svelte';
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { onMount } from 'svelte';
	import { isLoading } from 'svelte-i18n';
	import '$utils/i18n';

	inject({ mode: dev ? 'development' : 'production' });

	let isLoaded = false;
	$: useLoader = !isLoaded || $isLoading;

	onMount(async () => {
		isLoaded = true;
	});
</script>

<div class="h-screen flex flex-col div-color">
{#if useLoader}
	<Loader />
{:else}
	<Header />
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
