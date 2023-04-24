<script lang="ts">
  import Block from "./Block.svelte";
  import Switch from "./Switch.svelte";
  import { t, locale } from "svelte-i18n";
  
  export let show: boolean;
  $: showClass = show ? 'block' : 'hidden';

  function toggleMode(checked) {
    document.body.classList.toggle('dark');
  }

  function toggleLanguage(checked) {
    locale.set(checked ? 'es' : 'en');
  }
</script>

<div
  class="
    {showClass}
    absolute
    bg-opacity-75
    dark:bg-opacity-75
    backdrop-blur-sm
    h-screen
    w-screen
    flex
    justify-center
    items-center
    z-10
  ">
  <Block title={$t('settings.title')} transparent>
    <div class="flex flex-col dark:bg-neutral-600">
      <Switch
        title={$t('settings.mode')}
        left={$t('settings.light')}
        right={$t('settings.dark')}
        on:toggle={toggleMode}
      />
      <br>
      <Switch
        title={$t('settings.lang')}
        left={$t('settings.en')}
        right={$t('settings.es')}
        on:toggle={toggleLanguage}
      />
    </div>
  </Block>
</div>