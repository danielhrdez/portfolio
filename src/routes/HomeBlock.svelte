<script lang="ts">
	import Block from '$lib/components/Block.svelte';
	import Entity from '$components/Entity.svelte';
	import { t, json, isLoading } from 'svelte-i18n';

	export let type: 'education' | 'experience' = 'education';

	let typeString = '';
	if (type === 'education') {
		typeString = 'page.about.education';
	} else if (type === 'experience') {
		typeString = 'page.about.experience';
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

<Block {title}>
	{#if $isLoading}
		Loading...
	{:else if entities.length === 0}
		No data
	{:else}
		{#each entities as { title, entity, description, from, to, url }}
			<Entity {title} {entity} interval={[from, to]} {url} {description} />
		{/each}
	{/if}
</Block>
