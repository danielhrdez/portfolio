<script lang="ts">
	import AButton from './AButton.svelte';
	import ArrowLeft from './ArrowLeft.svelte';
	import ArrowRight from './ArrowRight.svelte';

	export let prevHref = '';
	export let nextHref = '';
	export let prevActive = true;
	export let nextActive = true;
</script>

<div class="flex flex-row gap-4">
	<div class="w-full" />

	<div class="w-14">
		<AButton href={prevHref} active={prevActive}>
			<ArrowLeft />
		</AButton>
	</div>

	<div class="w-14">
		<AButton href={nextHref} active={nextActive}>
			<ArrowRight />
		</AButton>
	</div>
</div>
