<script lang="ts">
	import Block from '$components/Block.svelte';
	import { t } from 'svelte-i18n';

	export let email: string;
	export let subjectPlaceholder: string;
	export let messagePlaceholder: string;

	let subject: string = '';
	let message: string = '';

	function sendEmail() {
		let finalSubject = encodeURIComponent(subject || subjectPlaceholder);
		let finalMessage = encodeURIComponent(message || messagePlaceholder);
		window.open(`mailto:${email}?subject=${finalSubject}&body=${finalMessage}`);
	}
</script>

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
