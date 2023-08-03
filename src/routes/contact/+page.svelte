<script lang="ts">
	import TitlePage from '$components/TitlePage.svelte';
	import PageSelector from '$components/PageSelector.svelte';
	import { t } from 'svelte-i18n';
</script>

<TitlePage text={$t('page.contact.title')} />
<PageSelector prevHref="/projects" nextActive={false} />
