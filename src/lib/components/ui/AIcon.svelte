<script lang="ts">
	import Icon from "./Icon.svelte";
  export let href: string;
  export let src: string;
  export let alt: string;
  export let className: string = '';
</script>

<a {href} target="_blank">
  <Icon {src} {alt} {className} />
</a>
