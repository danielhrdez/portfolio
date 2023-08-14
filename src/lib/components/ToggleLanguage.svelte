<script lang="ts">
	import { t, locale } from 'svelte-i18n';
	import { Theme, preferences } from '$utils/storage';
	import { Lang } from '$utils/storage';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	export let lang = Lang.ENGLISH as Lang;

	function toggleLanguage() {
		lang = lang === Lang.ENGLISH ? Lang.SPANISH : Lang.ENGLISH;
		preferences.update((preference) => {
			preference.lang = lang;
			return preference;
		});
		sliceUpperCase();
	}

	onMount(async () => {
		lang = get(preferences).lang;
		sliceUpperCase();
	});

	function sliceUpperCase() {
		locale.set(lang);
		lang = lang.slice(0, 2).toUpperCase() as Lang;
	}
</script>

<button on:click={toggleLanguage} class="w-10 h-10" aria-label={lang}>
	{lang}
</button>
