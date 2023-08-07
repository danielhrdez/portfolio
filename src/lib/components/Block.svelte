<script lang="ts">
    import MaskedText from '$lib/components/MaskedText.svelte';

    export let title: string;
    export let subtitle: string = '';
    export let id: string;
</script>

<div
    class="
        flex
        justify-center
        items-center
    "
    {id}
>
    <article
        class="
            div-color
            bg-gradient-to-r
            from-neutral-100/75
            dark:from-neutral-700/50
            p-4
            rounded-2xl
            drop-shadow-md
            h-full w-full
            transition-all
            min-w-[255px]
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
</div>
