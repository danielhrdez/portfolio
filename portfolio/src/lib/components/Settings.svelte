<script lang="ts">
  export let show: boolean;
  import Block from "./Block.svelte";

  $: showClass = show ? 'block' : 'hidden';
</script>

<div class="{showClass} absolute bg-opacity-75 dark:bg-opacity-75 backdrop-blur-sm h-screen w-screen flex justify-center items-center z-10">
  <Block title="Settings" transparent>
    <div class="flex flex-col">
      <label for="dark-mode" class="flex items-center">
        <input type="checkbox" id="dark-mode" class="mr-2" on:change={() => document.body.classList.toggle('dark')} />
        Dark Mode
      </label>
    </div>
  </Block>
</div>