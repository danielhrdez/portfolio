<script lang="ts">
  import { Waves } from "$utils/wave";
  import { onMount } from "svelte";

  export let numberOfWaves = 10;

  let canvas: HTMLCanvasElement;
  let waves: Waves;

  let width = 0;
  let height = 0;

  onMount(() => {
    waves = new Waves(numberOfWaves);
    waves.start(canvas);
  });
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<canvas
  bind:this={canvas}
  class="absolute inset-0 -z-10 blur-xl opacity-50 dark:opacity-25 h-full w-full"
  width={width}
  height={height}
/>
<div class="absolute -z-20 div-bg-color w-full h-full" />
