<script lang="ts">
	import { Shadow } from 'svelte-loading-spinners';

	let numberDots = 0;
	$: dots = '.'.repeat(numberDots);
	setInterval(() => {
		numberDots = (numberDots + 1) % 4;
	}, 500);
</script>

<div class="flex flex-col h-screen justify-center items-center bg-transparent">
	<h1 class="text-xl"><strong>Loading</strong></h1>
	<i>Please wait{dots}</i>
	<br />
	<Shadow size="50" color="black" duration="2s" />
</div>
