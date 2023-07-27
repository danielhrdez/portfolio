<script lang="ts">
	import MaskedText from '$lib/components/MaskedText.svelte';

	export let title: string;
	export let subtitle: string = '';
	export let id: string;
</script>

<div
	class="
    flex
    justify-center
    items-center
    bg-transparent
    dark:bg-transparent
  "
	{id}
>
	<div
		class="
      bg-gradient-to-r
      from-neutral-100/75
      dark:from-neutral-600/50
      p-4
      rounded-2xl
      drop-shadow-md
      h-full w-full
      hover:from-neutral-50/90
      hover:dark:from-neutral-300/10
      transition-all
      min-w-[255px]
    "
	>
		<h1 class="text-xl font-bold mr-12">
			{title}
		</h1>
		{#if subtitle}
			<MaskedText>
				{subtitle}
			</MaskedText>
      <br />
		{/if}
		<slot />
	</div>
</div>
