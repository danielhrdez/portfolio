<script lang="ts">
	import phoneIcon from '$lib/images/phone.svg';
	import emailIcon from '$lib/images/email.svg';
	import linkedinIcon from '$lib/images/linkedin.svg';

	let width = 0;
	let phone = '+34 603 66 69 13';
	let email = 'daniel@danielhrdez.dev';
	let linkedin = 'Linkedin';
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
	<a href="tel:{phone}">
		{#if width > 640}
			<p>{phone}</p>
		{:else}
			<img src={phoneIcon} alt="Phone icon" class="h-6 dark:invert" />
		{/if}
	</a>
	<a href="mailto:{email}?subject=Hello%20Daniel!">
		{#if width > 640}
			<p>{email}</p>
		{:else}
			<img src={emailIcon} alt="Email icon" class="h-6 dark:invert" />
		{/if}
	</a>
	<a href="https://www.linkedin.com/in/danihrdez/" target="_blank" rel="noreferrer">
		{#if width > 640}
			<p>{linkedin}</p>
		{:else}
			<img src={linkedinIcon} alt="Linkedin icon" class="h-6 dark:invert" />
		{/if}
	</a>
</footer>

<style lang="postcss">
	a {
		text-decoration: none;
		color: var(--neutral-900);
	}
</style>
