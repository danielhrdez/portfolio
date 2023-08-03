<script lang="ts">
	import NextButton from "./NextButton.svelte";
	import PrevButton from "./PrevButton.svelte";

    export let prevHref = '';
    export let nextHref = '';
    export let prevSelected = true;
    export let nextSelected = true;
</script>

<div class="flex flex-row gap-4">
	<div class="w-full" />
	<PrevButton href={prevHref} selected={prevSelected} />
	<NextButton href={nextHref} selected={nextSelected} />
</div>