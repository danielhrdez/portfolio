<script lang="ts">
	import Description from './Description.svelte';
	import Experiences from './Experiences.svelte';
	import Education from './Education.svelte';
</script>

{#if window.innerWidth < 768}
	<Description />
	<Experiences />
	<Education />
{:else}
	<div class="flex flex-col gap-4">
		<Description />
		<Education />
	</div>
	<Experiences />
{/if}
