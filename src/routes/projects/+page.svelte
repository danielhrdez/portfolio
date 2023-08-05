<script lang="ts">
	import Page from '../Page.svelte';
	import { t } from 'svelte-i18n';
</script>

<Page
	title={$t('page.projects.title')}
	prevHrefLabel={{
		href: '/',
		label: $t('page.about.title')
	}}
	nextHrefLabel={{
		href: '/contact',
		label: $t('page.contact.title')
	}}
/>
