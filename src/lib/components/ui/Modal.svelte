<script lang="ts">
    export let show: boolean;
    $: showClass = show ? 'block' : 'hidden';
</script>

<dialog
    class="
        {showClass}
        absolute
        bg-white/50
        text-black
        dark:text-white
        dark:bg-black/50
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
</dialog>