<script lang="ts">
	import Block from './Block.svelte';
	import Switch from './Switch.svelte';
	import { t, locale } from 'svelte-i18n';
	import { get } from 'svelte/store';
	import { preferences } from '../storage';
	import { onMount } from 'svelte';
	import settingsExit from '$lib/images/settings-exit.svg';

	export let show: boolean;
	$: showClass = show ? 'block' : 'hidden';

	let dark = get(preferences).theme === 'dark';
	let lang = get(preferences).lang;

	onMount(() => {
		document.documentElement.classList.toggle('dark', dark);
		locale.set(lang);
	});

	function toggleMode() {
		dark = !dark;
		preferences.update((prefs) => {
			prefs.theme = dark ? 'dark' : 'light';
			return prefs;
		});
		document.documentElement.classList.toggle('dark');
	}

	function toggleLanguage(e: CustomEvent<any>) {
		lang = e.detail.checked ? 'es' : 'en';
		preferences.update((prefs) => {
			prefs.lang = lang;
			return prefs;
		});
		locale.set(lang);
	}
</script>

<div
	class="
    {showClass}
    absolute
    bg-opacity-50
    dark:bg-opacity-50
    backdrop-blur-sm
    h-screen
    w-screen
    flex
    justify-center
    items-center
    z-10
  "
>
	<Block title={$t('settings.title')}>
		<img
			src={settingsExit}
			alt="settings"
			class="absolute top-0 right-0 w-5 m-6 cursor-pointer"
			on:click={() => (show = false)}
			on:keypress={(e) => {
				if (e.key === 'Enter') show = false;
			}}
		/>
		<Switch
			title={$t('settings.mode')}
			left={$t('settings.light')}
			right={$t('settings.dark')}
			checked={dark}
			on:toggle={toggleMode}
		/>
		<br />
		<Switch
			title={$t('settings.lang')}
			left={$t('settings.en')}
			right={$t('settings.es')}
			checked={lang === 'es'}
			on:toggle={toggleLanguage}
		/>
	</Block>
</div>
