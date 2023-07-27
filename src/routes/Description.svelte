<script lang="ts">
	import Block from '$components/Block.svelte';
	import { t } from 'svelte-i18n';

	$: description = $t('page.home.description') as unknown as string[];
</script>

<Block title="Daniel Hernández de León" subtitle={$t('page.home.job')} id="home">
	{#each description as line}
        <p>{line}</p>
    {/each}
</Block>
