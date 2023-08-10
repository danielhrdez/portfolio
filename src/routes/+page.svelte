<script lang="ts">
	import Description from './Description.svelte';
	import Experience from './Experience.svelte';
	import Education from './Education.svelte';
	import { t } from 'svelte-i18n';
	import Page from './Page.svelte';
	import FadeIn from '$components/FadeIn.svelte';

	let width = 0;

	const durations = [500, 750, 1000];
</script>

<svelte:window bind:innerWidth={width} />

<Page
	title={$t('page.about.title')}
	nextHrefLabel={{
		href: '/projects',
		label: $t('page.projects.title')
	}}
>
	{#if width < 768}
		<div class="flex flex-col gap-4">
			<FadeIn durationMs={durations[0]}>
				<Description />
			</FadeIn>
			<FadeIn durationMs={durations[1]}>
				<Experience />
			</FadeIn>
			<FadeIn durationMs={durations[2]}>
				<Education />
			</FadeIn>
		</div>
	{:else}
		<div class="flex flex-row gap-4">
			<div class="flex flex-col gap-4">
				<FadeIn durationMs={durations[0]}>
					<Description />
				</FadeIn>
				<FadeIn durationMs={durations[2]}>
					<Education />
				</FadeIn>
			</div>
			<FadeIn durationMs={durations[1]}>
				<Experience />
			</FadeIn>
		</div>
	{/if}
</Page>
