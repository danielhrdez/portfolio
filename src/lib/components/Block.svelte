<script lang="ts">
    import MaskedText from '$lib/components/MaskedText.svelte';

    export let title: string = '';
    export let subtitle: string = '';
</script>

<article
    class="
        bg-gradient-to-r
        from-neutral-100/90
        to-neutral-100/75
        dark:from-neutral-700/90
        dark:to-neutral-700/75
        hover:from-neutral-100/90
        hover:to-neutral-100/90
        dark:hover:from-neutral-700/90
        dark:hover:to-neutral-700/90
        p-4
        rounded-2xl
        drop-shadow-md
        h-full w-full
        transition-all
    "
>
    <h2 class="text-xl font-bold mr-12">
        {title}
    </h2>
    {#if subtitle}
        <MaskedText>
            {subtitle}
        </MaskedText>
        <br />
    {/if}
    <slot />
</article>
