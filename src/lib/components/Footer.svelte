<script lang="ts">
	import phoneIcon from '$lib/images/phone.svg';
	import emailIcon from '$lib/images/email.svg';
	import linkedinIcon from '$lib/images/linkedin.svg';

	let width = 0;
	let phone = phoneIcon;
	let email = emailIcon;
	let linkedin = linkedinIcon;
	$: if (width > 640) {
		phone = '+34 603 66 69 13';
		email = 'daniel@danielhrdez.dev';
		linkedin = 'Linkedin';
	} else {
		phone = phoneIcon;
		email = emailIcon;
		linkedin = linkedinIcon;
	}
</script>

<svelte:window bind:innerWidth={width} />

<footer
	class="
		flex
		h-10
		justify-around
		items-center
		bg-neutral-100
		dark:bg-neutral-600
	"
>
	<a href="tel:{phone.replace(/\s/g, '')}">
		{#if width > 640}
			<p>{phone}</p>
		{:else}
			<img src={phone} alt="Phone icon" class="h-6 dark:invert" />
		{/if}
	</a>
	<a href="mailto:daniel@danielhrdez.dev?subject=Hello%20Daniel!">
		{#if width > 640}
			<p>{email}</p>
		{:else}
			<img src={email} alt="Email icon" class="h-6 dark:invert" />
		{/if}
	</a>
	<a href="https://www.linkedin.com/in/danihrdez/" target="_blank" rel="noreferrer">
		{#if width > 640}
			<p>{linkedin}</p>
		{:else}
			<img src={linkedin} alt="Linkedin icon" class="h-6 dark:invert" />
		{/if}
	</a>
</footer>

<style lang="postcss">
	a {
		text-decoration: none;
		color: var(--neutral-900);
	}
</style>
