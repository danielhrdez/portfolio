<script lang="ts">
	import Block from '$lib/components/Block.svelte';
	import SubBlock from '$lib/components/SubBlock.svelte';
	import { t } from 'svelte-i18n';

	const textUrl = 'page.education.'
	$: bach = {
		title: $t(textUrl + 'bach.title'),
		entity: $t(textUrl + 'bach.entity'),
		description: $t(textUrl + 'bach.description') as unknown as string[],
		from: $t(textUrl + 'bach.from'),
		to: $t(textUrl + 'bach.to'),
		url: $t(textUrl + 'bach.url')
	};
</script>

<Block title={$t('page.education.title')} id="education">
	<SubBlock
		title={bach.title}
		entity={bach.entity}
		interval={[bach.from, bach.to]}
		url={bach.url}
		description={bach.description}
	/>
</Block>
