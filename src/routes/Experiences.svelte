<script lang="ts">
	import Block from '$lib/components/Block.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import { t } from 'svelte-i18n';

	$: titsa = {
		title: $t('page.experience.titsa.title'),
		company: $t('page.experience.titsa.company'),
		type: $t('page.experience.titsa.type'),
		description: $t('page.experience.titsa.description'),
		from: $t('page.experience.titsa.from'),
		to: $t('page.experience.titsa.to')
	};
</script>

<Block title={$t('page.experience.title')} id="experience">
	<Experience
		title={titsa.title}
		type={titsa.type}
		company={titsa.company}
		interval={[titsa.from, titsa.to]}
	>
		{titsa.description}
	</Experience>
</Block>
