<script lang="ts">
	import MailForm from './MailForm.svelte';
	import ContactLinks from './ContactLinks.svelte';
	import Page from '../Page.svelte';
	import { t } from 'svelte-i18n';
	import FadeIn from '$components/FadeIn.svelte';

	const email = 'contact@danielhrdez.dev';
	const linkedIn = 'https://www.linkedin.com/in/danihrdez/';
	const github = 'https://www.github.com/DanielHrdez';

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
		<FadeIn durationMillis={500}>
			<MailForm {email} {subjectPlaceholder} {messagePlaceholder} />
		</FadeIn>
		<FadeIn durationMillis={750}>
			<ContactLinks {email} {github} {linkedIn} />
		</FadeIn>
	</div>
</Page>
