<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let title: string;
	export let left: string = 'On';
	export let right: string = 'Off';
	export let checked: boolean = false;

	const dispatch = createEventDispatcher();

	function toggle() {
		dispatch('toggle', { checked });
	}
</script>

<div
	class="
		flex
		flex-col
		bg-transparent
		dark:bg-transparent
		items-center
		w-full
  	"
>
	<h2 class="text-xl">
		{title}
	</h2>
	<label class="w-full">
		<input class="sr-only" type="checkbox" bind:checked on:change={toggle} />
		<div
			class="
				flex
				bg-neutral-300/75
				dark:bg-neutral-700/75
				cursor-pointer
				rounded-xl
				h-6
				relative
			"
		>
			<p
				class="
					bg-[#48d794]
					dark:bg-[#39a372]
					px-2
					rounded-full
					absolute
					w-20
					{checked
						? 'left-[calc(100%-5rem)]'
						: 'left-0'
					}
					text-center
					hover-scale
					hover:drop-shadow-md
				"
			>
				{checked ? right : left}
			</p>
		</div>
	</label>
</div>
