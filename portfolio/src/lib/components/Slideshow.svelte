<script lang='ts'>
  import type { BadgeLink } from "$lib/types";
  export let images: BadgeLink[] = [];
  images.push(...images);
</script>

<div class="overflow-hidden rounded-md">
  <div class="flex max-w-md slide-image">
    {#each images as image}
      <img
        class="relative"
        src={image.src}
        style="width:50%"
        alt={image.name}
      >
    {/each}
  </div>
</div>

<style lang="scss">
  .slide-image {
    animation: slide 12s infinite;
    animation-timing-function: linear;
  }

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-223%);
    }
  }
</style>