<script lang="ts">
	import AButton from './AButton.svelte';
	import ArrowLeft from './ArrowLeft.svelte';
	export let href = '';
	export let selected = true;
</script>

<div class="w-14">
	<AButton {href} {selected}>
		<ArrowLeft />
	</AButton>
</div>
