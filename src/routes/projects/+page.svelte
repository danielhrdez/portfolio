<script lang="ts">
	import TitlePage from '$components/TitlePage.svelte';
	import PageSelector from '$components/PageSelector.svelte';
	import Block from '$components/Block.svelte';
	import { t } from 'svelte-i18n';
</script>

<TitlePage text={$t('page.projects.title')} />

<!-- <Block id="cloudml" title="ML in AWS Services" /> -->


<!-- <Block id="eliteolympus" title="EliteOlympus" /> -->
<!-- <Block id="chatbot" title="ChatBot" /> -->

<PageSelector prevHref="/" nextHref="/contact" />
