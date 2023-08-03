<script lang="ts">
	export let href = '';
	export let selected = true;
</script>

<a
	class="
        p-4
        rounded-xl
        bg-slate-300
        dark:bg-slate-600
        w-full
        {selected ? 'hover:scale-105': ''}
        drop-shadow-md
        flex
        justify-between
        text-black
        dark:text-white
        hover:text-black
        hover:dark:text-white
        opacity-[{selected ? '1' : '0.5'}]
    "
	href={selected ? href : ''}
>
	<slot />
</a>
