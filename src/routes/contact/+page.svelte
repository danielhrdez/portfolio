<script lang="ts">
	import Block from '$components/Block.svelte';
	import Page from '../Page.svelte';
	import { t } from 'svelte-i18n';

	const email = 'contact@danielhrdez.dev';
	let subject: string = '';
	$: subjectPlaceholder = $t('page.contact.subjectPlaceholder');
	let message: string = '';
	$: messagePlaceholder = $t('page.contact.messagePlaceholder');

	function sendEmail() {
		let finalSubject = encodeURIComponent(subject || subjectPlaceholder);
		let finalMessage = encodeURIComponent(message || messagePlaceholder);
		window.open(`mailto:${email}?subject=${finalSubject}&body=${finalMessage}`);
	}
</script>

<Page
	title={$t('page.contact.title')}
	prevHrefLabel={{
		href: '/projects',
		label: $t('page.projects.title')
	}}
>
	<Block title={$t('page.contact.mail')} id="mail">
		<form action="" enctype="text/plain">
			{$t('page.contact.subject')}:<br />
			<input
				type="text"
				name="subject"
				bind:value={subject}
				placeholder={subjectPlaceholder}
				class="w-full"
				minlength="2"
			/><br />
			{$t('page.contact.message')}:<br />
			<textarea
				bind:value={message}
				placeholder={messagePlaceholder}
				class="w-full resize-none"
				rows="5"
				cols="5"
				minlength="2"
			/><br />
			<input
				type="submit"
				value={$t('page.contact.send')}
				on:click={sendEmail}
				class="cursor-pointer hover:text-green-500"
			/>
			<input
				type="reset"
				value={$t('page.contact.reset')}
				on:click={() => {
					subject = message = '';
				}}
				class="cursor-pointer hover:text-red-500"
			/>
		</form>
	</Block>
</Page>
