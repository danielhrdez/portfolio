<script lang="ts">
	import Page from '../Page.svelte';
	import { t } from 'svelte-i18n';
</script>

<Page
	title={$t('page.contact.title')}
	prevHrefLabel={{
		href: '/projects',
		label: $t('page.projects.title')
	}}
/>
