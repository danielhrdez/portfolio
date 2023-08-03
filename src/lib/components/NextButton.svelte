<script lang="ts">
	import AButton from './AButton.svelte';
	import ArrowRight from './ArrowRight.svelte';
	export let href = '';
	export let selected = true;
</script>

<div class="w-14">
	<AButton {href} {selected}>
		<ArrowRight />
	</AButton>
</div>
