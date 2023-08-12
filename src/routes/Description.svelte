<script lang="ts">
	import Block from '$components/Block.svelte';
	import { t, json, isLoading } from 'svelte-i18n';

	$: description = $json('page.about.me.description') as string[];
</script>

<Block title="Daniel Hernández de León" subtitle={$t('page.about.me.job')}>
	{#if $isLoading}
		Loading...
	{:else if description.length === 0}
		No data
	{:else}
		<div class="max-w-[40ch] sm:max-w-[60ch] flex flex-col gap-3 leading-5">
			{#each description as line}
				<p>{line}</p>
			{/each}
		</div>
	{/if}
</Block>
