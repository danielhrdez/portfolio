<script lang="ts">
	export let href = '';
	export let active = true;
</script>

<a
	class="
        p-4
        rounded-xl
        bg-slate-300
        dark:bg-slate-600
        w-full
        {active ? 'hover:scale-105' : ''}
        drop-shadow-md
        flex
        justify-between
        text-black
        dark:text-white
        hover:text-black
        hover:dark:text-white
    "
	href={active ? href : ''}
    style="opacity: {active ? '1' : '.5'}"
>
	<slot />
</a>
