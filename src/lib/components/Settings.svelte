<script lang="ts">
	import Block from './Block.svelte';
	import Switch from './Switch.svelte';
	import { t, locale } from 'svelte-i18n';
	import settingsExit from '$lib/assets/settings-exit.svg';
	import { preferences } from '$utils/storage';
	import Modal from './Modal.svelte';

	export let show = false;
	export let dark = false;
	export let lang = 'en';

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

<Modal show={show}>
	<Block title={$t('settings.title')}>
		<img
			src={settingsExit}
			alt="settings"
			class="absolute top-0 right-0 w-5 m-6 cursor-pointer dark:invert hover-scale"
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
			checked={lang.startsWith('es')}
			on:toggle={toggleLanguage}
		/>
	</Block>
</Modal>
