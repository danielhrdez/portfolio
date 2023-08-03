<script lang="ts">
	import TitlePage from '$components/TitlePage.svelte';
	import PageSelector from '$components/PageSelector.svelte';
	import { t } from 'svelte-i18n';
</script>

<TitlePage text={$t('page.projects.title')} />
<PageSelector prevHref="/" nextHref="/contact" />

<!-- <Block id="projects" title="Projects">
	<SubBlock title="ML in AWS Services" subtitle="Final Grade Project">...</SubBlock>
	<SubBlock title="EliteOlympus" subtitle="Fitness App">...</SubBlock>
	<SubBlock title="This Website">...</SubBlock>
	<SubBlock title="ChatBot" subtitle="Own AI">Intentar algo.</SubBlock>
</Block> -->

<!-- <Block id="cloudml" title="ML in AWS Services" />
<Block id="eliteolympus" title="EliteOlympus" />
<Block id="chatbot" title="ChatBot" /> -->
