<script lang="ts">
	import Description from './Description.svelte';
	import Experience from './Experience.svelte';
	import Education from './Education.svelte';

	let width = 0;
</script>

<svelte:window bind:innerWidth={width} />

{#if width < 768}
	<Description />
	<Experience />
	<Education />
{:else}
	<div class="flex flex-col gap-4">
		<Description />
		<Education />
	</div>
	<Experience />
{/if}
