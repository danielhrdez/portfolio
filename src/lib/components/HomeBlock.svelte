<script lang="ts">
	import Block from '$lib/components/Block.svelte';
	import SubBlock from '$lib/components/SubBlock.svelte';
	import { t, json, isLoading } from 'svelte-i18n';

	export let type: 'education' | 'experience' = 'education';

	let typeString = '';
	if (type === 'education') {
		typeString = 'page.education';
	} else if (type === 'experience') {
		typeString = 'page.experience';
	}

	type Entity = {
		title: string;
		entity: string;
		description: string[];
		from: string;
		to: string;
		url: string;
	};

	$: entities = [] as Entity[];
	$: if (type === 'education') {
		entities = $json(`${typeString}.degrees`) as Entity[];
	} else if (type === 'experience') {
		entities = $json(`${typeString}.companies`) as Entity[];
	}
	$: title = $t(`${typeString}.title`);
</script>

<Block {title} id="education">
	{#if $isLoading}
		<p>Loading...</p>
	{:else if entities.length === 0}
		<p>No data</p>
	{:else}
		{#each entities as entity}
			<SubBlock
				title={entity.title}
				entity={entity.entity}
				interval={[entity.from, entity.to]}
				url={entity.url}
				description={entity.description}
			/>
		{/each}
	{/if}
</Block>
