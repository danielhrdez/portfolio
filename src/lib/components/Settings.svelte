<script lang="ts">
    import Block from './ui/Block.svelte';
    import Switch from './ui/Switch.svelte';
    import { t, locale } from 'svelte-i18n';
    import { Theme, preferences } from '$utils/storage';
    import Modal from './ui/Modal.svelte';
    import settingsExit from '$lib/assets/settings-exit.svg';
    import { Lang } from '$utils/storage';

    export let show = false;
    export let dark = false;
    export let lang = Lang.ENGLISH as Lang;

    function toggleMode() {
        dark = !dark;
        preferences.update((preference) => {
            preference.theme = dark ? Theme.DARK : Theme.LIGHT;
            return preference;
        });
        document.documentElement.classList.toggle('dark');
    }

    function toggleLanguage(e: CustomEvent<any>) {
        lang = e.detail.checked ? Lang.SPANISH : Lang.ENGLISH;
        preferences.update((preference) => {
            preference.lang = lang;
            return preference;
        });
        locale.set(lang);
    }
</script>

<Modal {show}>
    <div class="min-w-[255px] div-bg-color rounded-2xl">
        <Block title={$t('settings.title')}>
            <img
                loading="lazy"
                src={settingsExit}
                alt="settings"
                class="absolute top-0 right-0 w-5 h-5 m-6 cursor-pointer dark:invert hover-scale transition-all"
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
    </div>
</Modal>
