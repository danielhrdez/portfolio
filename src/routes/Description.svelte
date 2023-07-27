<script lang="ts">
	import Block from '$components/Block.svelte';
	import { t, json, isLoading } from 'svelte-i18n';

	$: description = $json('page.home.description') as string[];
</script>

<Block title="Daniel Hernández de León" subtitle={$t('page.home.job')} id="home">
	{#if $isLoading}
		<p>Loading...</p>
	{:else if description.length === 0}
		<p>No data</p>
	{:else}
		{#each description as line}
			<p>{line}</p>
		{/each}
	{/if}
</Block>
