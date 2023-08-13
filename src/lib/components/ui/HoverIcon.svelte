<script lang="ts">
	export let src: string;
	export let alt: string;
	let hovering = false;
</script>

<div class="relative">
	{#if hovering}
		<span
			class="
                absolute
                -top-6
                right-0
                bg-neutral-500
                z-10
                rounded-md
                px-1
            "
		>
			{alt}
		</span>
	{/if}
	<img
		{src}
		{alt}
		class="w-8 h-8"
		on:mouseenter={() => (hovering = true)}
		on:mouseleave={() => (hovering = false)}
	/>
</div>
