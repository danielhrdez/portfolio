<script lang="ts">
    import type { HrefLabel } from '$components/ui/AButton';
    import TitlePage from '$components/TitlePage.svelte';
    import PageSelector from '$components/PageSelector.svelte';

    export let title: string;

    export let prevHrefLabel: HrefLabel | undefined = undefined;
    export let nextHrefLabel: HrefLabel | undefined = undefined;
</script>

<TitlePage title={title} />

<slot />

<PageSelector {prevHrefLabel} {nextHrefLabel} />
