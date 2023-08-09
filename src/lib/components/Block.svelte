<script lang="ts">
    import MaskedText from '$lib/components/MaskedText.svelte';

    export let title: string = '';
    export let subtitle: string = '';
</script>

<article
    class="
        div-bg-color
        bg-gradient-to-r
        from-neutral-100/50
        to-neutral-100/0
        dark:from-neutral-700/50
        dark:to-neutral-700/0
        hover:from-neutral-100/75
        hover:to-neutral-100/0
        dark:hover:from-neutral-700/75
        dark:hover:to-neutral-700/0
        p-4
        rounded-2xl
        drop-shadow-md
        h-full w-full
        transition-all
        backdrop-blur-xl
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
