<script lang="ts">
    import Description from './Description.svelte';
    import Experience from './Experience.svelte';
    import Education from './Education.svelte';
    import { t } from 'svelte-i18n';
    import Page from './Page.svelte';

    let width = 0;
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
</Page>
