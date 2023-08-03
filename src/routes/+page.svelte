<script lang="ts">
	import Description from './Description.svelte';
	import Experience from './Experience.svelte';
	import Education from './Education.svelte';
	import TitlePage from '$components/TitlePage.svelte';
	import { t } from 'svelte-i18n';
	import PageSelector from '$components/PageSelector.svelte';

	let width = 0;
</script>

<svelte:window bind:innerWidth={width} />

<TitlePage text={$t('page.about.title')} />

{#if width < 768}
	<Description />
	<Experience />
	<Education />
{:else}
	<div class="flex flex-row gap-4">
		<div class="flex flex-col gap-4">
			<Description />
			<Education />
		</div>
		<Experience />
	</div>
{/if}

<PageSelector nextHref="/projects" prevActive={false} />
