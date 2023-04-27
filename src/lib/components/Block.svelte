<script lang="ts">
	import MaskedText from '$lib/components/MaskedText.svelte';

	export let title: string;
	export let subtitle: string = '';
</script>

<div
	class="
    flex
    justify-center
    items-center
    h-full
    bg-transparent
    dark:bg-transparent
  "
>
	<div
		class="
      bg-gradient-to-r
      from-neutral-100/75
      dark:from-neutral-600/50
      p-4
      rounded-2xl
      drop-shadow-xl
    "
	>
		<h1 class="text-3xl font-bold mr-12">
			{title}
		</h1>
		<MaskedText>{subtitle}</MaskedText>
		<br />
		<slot />
	</div>
</div>
