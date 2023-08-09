<script lang="ts">
  import { Waves } from "$utils/wave";
  import { onMount } from "svelte";

  export let opacity = 0.1;
  export let numberOfWaves = 5;

  let canvas: HTMLCanvasElement;
  let waves: Waves;

  let width = 0;
  let height = 0;

  onMount(() => {
    waves = new Waves(canvas, numberOfWaves, opacity);
    waves.start();
    console.log(width, height);
  });
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<canvas
  bind:this={canvas}
  class="absolute inset-0 -z-10 blur scale-110 opacity-10"
  width={width}
  height={height}
/>
