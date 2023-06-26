<script lang="ts">
	export let title: string;
	export let type: string;
	export let company: string;
	export let interval: string[];
</script>

<div class="flex flex-col bg-transparent dark:bg-transparent">
	<div class="flex flex-row justify-between bg-transparent dark:bg-transparent">
        <h2 class="text-2xl">{title}</h2>
        <h2 class="text-2xl">{company}</h2>
    </div>
	<div class="flex flex-row justify-between bg-transparent dark:bg-transparent">
        <h3 class="text-xl">{type}</h3>
        <h3 class="text-xl">{interval[0]} - {interval[1]}</h3>
    </div>
	<p class="flex px-4">
		<slot />
	</p>
	<br />
</div>
