<script lang="ts">
	import type { HrefLabel } from './AButton';
	import AButton from './AButton.svelte';
	import ArrowLeft from './ArrowLeft.svelte';
	import ArrowRight from './ArrowRight.svelte';

	export let prevHrefLabel: HrefLabel | undefined = undefined;
	export let nextHrefLabel: HrefLabel | undefined = undefined;
</script>

<div class="flex flex-row gap-4">
	<div class="w-full" />

	<div class="w-14">
		<AButton hrefLabel={prevHrefLabel}>
			<ArrowLeft />
		</AButton>
	</div>

	<div class="w-14">
		<AButton hrefLabel={nextHrefLabel}>
			<ArrowRight />
		</AButton>
	</div>
</div>
