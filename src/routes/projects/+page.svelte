<script lang="ts">
	import Page from '../Page.svelte';
	import { t } from 'svelte-i18n';
	import ProjectCard from './ProjectCard.svelte';
	import FadeIn from '$components/ui/FadeIn.svelte';
	import { projects } from './projects';
	import { onMount } from 'svelte';

	let windowWidth = 0;
	let windowPadding = 10;
	let windowPadding2 = windowPadding * 2;
	let itemWidth = 250;
	let gap = 8;
	let itemWidthGap2 = itemWidth + gap * 2;
	let numberOfColumns = 0;

	onMount(() => {
		function calcNumberOfColumns(min: number, max: number) {
			numberOfColumns = Math.floor((windowWidth - windowPadding2) / itemWidthGap2);
			if (numberOfColumns > max) numberOfColumns = max;
			else if (numberOfColumns < min) numberOfColumns = min;
		}
		window.addEventListener('resize', () => {
			windowWidth = window.innerWidth;
			calcNumberOfColumns(1, 4);
		});
		calcNumberOfColumns(1, 4);
	});
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
		{#if numberOfColumns > 0}
			{#each projects as { name, href, srcImg, srcCodeLink, description, techStack }, i}
				<FadeIn durationMs={100 + 400 * ((i % numberOfColumns) + Math.floor(i / numberOfColumns))}>
					<ProjectCard {name} {href} {srcImg} {srcCodeLink} {description} {techStack} />
				</FadeIn>
			{/each}
		{/if}
	</div>
</Page>
