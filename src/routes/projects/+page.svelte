<script lang="ts">
	import Page from '../Page.svelte';
	import { t } from 'svelte-i18n';
	import ProjectCard from './ProjectCard.svelte';
	// import solidJSIcon from '$assets/solid-js.svg';
	// import fastAPIIcon from '$assets/fast-api.svg';
	import FadeIn from '$components/FadeIn.svelte';
	import { projects } from './projects';
</script>

<Page
	title={$t('page.projects.title')}
	prevHrefLabel={{
		href: '/',
		label: $t('page.about.title')
	}}
	nextHrefLabel={{
		href: '/contact',
		label: $t('page.contact.title')
	}}
>
	<div class="flex flex-wrap gap-4 justify-center max-w-6xl">
		{#each projects as { name, href, srcImg, srcCodeLink, description, techStack }, i}
			<FadeIn durationMs={500 + 100 * i}>
				<ProjectCard {name} {href} {srcImg} {srcCodeLink} {description} {techStack} />
			</FadeIn>
		{/each}
	</div>
</Page>
