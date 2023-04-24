<script lang='ts'>
  import { createEventDispatcher } from 'svelte';
  
  export let title: string;
  export let left: string = 'On';
  export let right: string = 'Off';

  const dispatch = createEventDispatcher();
  let checked: boolean = false;

  function toggle() {
    dispatch('toggle', checked);
  }
</script>

<h2>{title}</h2>
<label>
  <input
    class="sr-only"
    type="checkbox"
    bind:checked
    on:change={toggle}
  />
  <div class="
    flex
    place-content-between
    bg-neutral-500
    cursor-pointer
    rounded-xl
    px-1
    before:absolute
    before:bg-[#2cce82]
    before:w-6
    before:h-6
    before:rounded-full
    {checked ? 'before:right-4' : 'before:left-4'}
  ">
    <span class="z-10">{left}</span>
    <span class="z-10">{right}</span>
  </div>
</label>
