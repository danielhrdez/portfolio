<script lang="ts">
	import Block from '$lib/components/Block.svelte';
	import SubBlock from '$components/SubBlock.svelte';
	import { t } from 'svelte-i18n';

	const textUrl = 'page.experience.';
	$: titsa = {
		title: $t(textUrl + 'titsa.title'),
		entity: $t(textUrl + 'titsa.entity'),
		description: $t(textUrl + 'titsa.description') as unknown as string[],
		from: $t(textUrl + 'titsa.from'),
		to: $t(textUrl + 'titsa.to'),
		url: $t(textUrl + 'titsa.url')
	};
</script>

<Block title={$t('page.experience.title')} id="experience">
	<SubBlock
		title={titsa.title}
		entity={titsa.entity}
		interval={[titsa.from, titsa.to]}
		url={titsa.url}
		description={titsa.description}
	/>
</Block>
