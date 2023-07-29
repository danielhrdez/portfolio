<script lang="ts">
	export let title: string;
	export let entity: string;
	export let interval: string[];
	export let url: string;
	export let description: string[];
</script>

<div class="flex flex-col bg-transparent dark:bg-transparent gap-1 max-w-2xl">
	<div class="flex flex-row justify-between bg-transparent dark:bg-transparent">
		<h2 class="text-xl">
			{title}
		</h2>
		<h2 class="text-xl">
			<a href={url} target="_blank" rel="noopener noreferrer">
				{entity}
			</a>
		</h2>
	</div>
	<h3 class="text-sm text-neutral-600 dark:text-[#D6D6D6]">{interval[0]} - {interval[1]}</h3>
	<ul class="px-6">
		{#each description as line}
			<li class="list-disc text-md">
				{line}
			</li>
		{/each}
	</ul>
</div>
