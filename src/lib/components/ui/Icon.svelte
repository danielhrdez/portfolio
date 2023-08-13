<script lang="ts">
  export let src: string;
  export let alt: string;
  export let className: string = "";
  export let invert: boolean = true;
</script>

<img loading="lazy" {src} {alt} class="w-8 h-8 {invert ? 'dark:invert' : ''} {className}" />
