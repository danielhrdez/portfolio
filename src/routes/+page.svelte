<script lang="ts">
	import Block from '$components/Block.svelte';
	import { t } from 'svelte-i18n';

	let year = new Date().getFullYear();
	$: description = $t('page.home.description', { values: { age: year - 2001 } });
</script>

<Block title="Daniel Hernández de León" subtitle={$t('page.home.job')}>
	<warning class="text-center text-red-500 text-2xl"> THIS PAGE IS UNDER CONSTRUCTION </warning>
	<br />
	<br />
	{@html description}
</Block>
