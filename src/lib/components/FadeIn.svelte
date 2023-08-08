<script lang="ts">
  export let durationMillis = 0;
  let opacityDiv: HTMLDivElement;

  $: {
    if (opacityDiv) {
      opacityDiv.style.opacity = "0";
      const keyframes = [
        { opacity: 0.75, scale: 0.99 },
        { opacity: 0.5, scale: 1.01 },
        { opacity: 1, scale: 1 },
      ];
      const options: KeyframeAnimationOptions = {
        duration: durationMillis,
        easing: "ease-in-out",
        fill: "forwards",
      };
      const animation = opacityDiv.animate(keyframes, options);
      animation.play();
    }
  }
</script>

<div bind:this={opacityDiv} class="flex">
  <slot />
</div>
