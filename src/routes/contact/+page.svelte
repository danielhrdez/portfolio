<script lang="ts">
	import MailForm from './MailForm.svelte';
	import ContactLinks from './ContactLinks.svelte';
	import Page from '../Page.svelte';
	import { t } from 'svelte-i18n';

	const email = 'contact@danielhrdez.dev';
	$: subjectPlaceholder = $t('page.contact.subjectPlaceholder');
	$: messagePlaceholder = $t('page.contact.messagePlaceholder');
</script>

<Page
	title={$t('page.contact.title')}
	prevHrefLabel={{
		href: '/projects',
		label: $t('page.projects.title')
	}}
>
	<div class="flex flex-col sm:flex-row gap-4">
		<MailForm {email} {subjectPlaceholder} {messagePlaceholder} />
		<ContactLinks />
	</div>
</Page>
