<script lang="ts">
    export let show: boolean;
    $: showClass = show ? 'block' : 'hidden';
</script>

<div
    class="
        {showClass}
        absolute
        bg-opacity-20
        dark:bg-opacity-20
        backdrop-blur-sm
        h-screen
        w-screen
        flex
        justify-center
        items-center
        z-30
    "
>
    <slot />
</div>