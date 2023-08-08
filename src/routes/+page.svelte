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
        <FadeIn durationMillis={durations[0]}>
            <Description />
        </FadeIn>
        <FadeIn durationMillis={durations[1]}>
            <Experience />
        </FadeIn>
        <FadeIn durationMillis={durations[2]}>
            <Education />
        </FadeIn>
    {:else}
        <div class="flex flex-row gap-4">
            <div class="flex flex-col gap-4">
                <FadeIn durationMillis={durations[0]}>
                    <Description />
                </FadeIn>
                <FadeIn durationMillis={durations[2]}>
                    <Education />
                </FadeIn>
            </div>
            <FadeIn durationMillis={durations[1]}>
                <Experience />
            </FadeIn>
        </div>
    {/if}
</Page>
