<script lang="ts">
	import Block from '$components/Block.svelte';
	import { t } from 'svelte-i18n';

	$: description = $t('page.home.description');
</script>

<Block title="Daniel Hernández de León" subtitle={$t('page.home.job')} id="home">
	<p class="text-center text-red-500 text-2xl">THIS PAGE IS UNDER CONSTRUCTION</p>
	<br />
	{@html description}
</Block>
