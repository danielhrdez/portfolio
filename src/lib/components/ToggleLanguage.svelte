<script lang="ts">
	import { locale } from 'svelte-i18n';
	import { preferences } from '$utils/storage';
	import { Lang } from '$utils/storage';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	export let lang = Lang.ENGLISH as Lang;
	$: langUpperCase = lang.toUpperCase();

	function toggleLanguage() {
		lang = lang === Lang.ENGLISH ? Lang.SPANISH : Lang.ENGLISH;
		preferences.update((preference) => {
			preference.lang = lang;
			return preference;
		});
		setSlice();
	}

	onMount(async () => {
		lang = get(preferences).lang;
		setSlice();
	});

	function setSlice() {
		locale.set(lang);
		lang = lang.slice(0, 2) as Lang;
	}
</script>

<button on:click={toggleLanguage} class="w-10 h-10" aria-label={langUpperCase}>
	{langUpperCase}
</button>
