<script lang="ts">
	import { Theme, preferences } from '$utils/storage';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	let dark = false;

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
		document.documentElement.classList.toggle('dark', dark);
	});

	function toggleMode() {
		dark = !dark;
		preferences.update((preference) => {
			preference.theme = dark ? Theme.DARK : Theme.LIGHT;
			return preference;
		});
		document.documentElement.classList.toggle('dark');
	}
</script>

<button on:click={toggleMode} class="w-6 h-6" aria-label="Toggle theme">
    {#if !dark}
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 256 256">
            <path
                d="M127.9 192.5A64.7 64.7 0 1 1 128 63a64.7 64.7 0 0 1-.1 129.4zM110 50.9a2.8 2.8 0 0 1-2.6-3.9l17.9-43.8a2.8 2.8 0 0 1 5.2 0L148.3 47a2.8 2.8 0 0 1-3.2 3.8 81 81 0 0 0-35 0zm17.9 203.4c-1.2 0-2.2-.7-2.6-1.7l-17.9-44a2.8 2.8 0 0 1 3.2-3.7 80.9 80.9 0 0 0 34.5 0 2.8 2.8 0 0 1 3.2 3.8l-17.8 43.9a3 3 0 0 1-2.6 1.7zM48 148.5c-.3 0-.6 0-1-.2L3.2 130.5a2.8 2.8 0 0 1 0-5.2L47 107.4a2.8 2.8 0 0 1 3.8 3.2 81 81 0 0 0 0 34.5 2.8 2.8 0 0 1-2.7 3.4zm159.6 0a2.8 2.8 0 0 1-2.7-3.4 81.3 81.3 0 0 0 0-34.5 2.8 2.8 0 0 1 3.8-3.2l43.9 17.9a2.8 2.8 0 0 1 0 5.2l-44 17.8-1 .2zM58.8 86.9h-.2a3 3 0 0 1-2.4-1.7L37.8 41.5a2.8 2.8 0 0 1 3.7-3.7l43.7 18.4a2.8 2.8 0 0 1 .4 5 81.2 81.2 0 0 0-24.4 24.4c-.5.8-1.4 1.3-2.4 1.3zM215.3 218l-1.1-.1-43.6-18.4a2.8 2.8 0 0 1-.5-5 81 81 0 0 0 24.4-24.4 3 3 0 0 1 2.6-1.2c1 0 2 .7 2.4 1.7l18.4 43.6a2.8 2.8 0 0 1-2.6 3.9zM196.9 86.9c-1 0-1.9-.5-2.4-1.3a81 81 0 0 0-24.4-24.4 2.8 2.8 0 0 1 .5-5l43.6-18.4a2.8 2.8 0 0 1 3.7 3.7l-18.4 43.7a2.8 2.8 0 0 1-2.6 1.7zM40.4 218a2.8 2.8 0 0 1-2.6-3.8l18.4-43.6c.4-1 1.4-1.7 2.4-1.7 1-.2 2 .4 2.6 1.2a81 81 0 0 0 24.4 24.4 2.8 2.8 0 0 1-.4 5l-43.7 18.4-1 .2z"
            />
        </svg>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
            <path
                d="M17.4 15.1a7.3 7.3 0 0 1-5.6-13.5l.7-.3a8.2 8.2 0 0 0-5.4.4 9 9 0 1 0 7 16.6 8.4 8.4 0 0 0 4.3-3.9 5.3 5.3 0 0 1-1 .7z"
            />
        </svg>
    {/if}
</button>
