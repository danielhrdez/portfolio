<script lang="ts">
  import Block from "./Block.svelte";
  import Switch from "./Switch.svelte";
  
  export let show: boolean;
  $: showClass = show ? 'block' : 'hidden';

  function toggleMode() {
    document.body.classList.toggle('dark');
  }

  function toggleLanguage() {
    console.log('toggle language');
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
  <Block title="Settings" transparent>
    <div class="flex flex-col dark:bg-neutral-600">
      <Switch title="Mode" left="Light" right="Dark" on:toggle={toggleMode} />
      <br>
      <Switch
        title="Language"
        left="English"
        right="Spanish"
        on:toggle={toggleLanguage}
      />
    </div>
  </Block>
</div>