<script lang="ts">
	import phoneIcon from '$assets/phone.svg';
	import emailIcon from '$assets/email.svg';
	import linkedinIcon from '$assets/linkedin.svg';

	let width = 0;
	let phone = '+34 603 66 69 13';
	let email = 'contact@danielhrdez.dev';
	let linkedin = 'Linkedin';
</script>

<svelte:window bind:innerWidth={width} />

<footer class="fixed bottom-0 w-full">
	<div
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
				<img loading="lazy" src={phoneIcon} alt="Phone icon" class="w-6 h-6 dark:invert" />
			{/if}
		</a>
		<a href="mailto:{email}?subject=Hello%20Daniel!">
			{#if width > 640}
				<p>{email}</p>
			{:else}
				<img loading="lazy" src={emailIcon} alt="Email icon" class="w-6 h-6 dark:invert" />
			{/if}
		</a>
		<a href="https://www.linkedin.com/in/danihrdez/" target="_blank" rel="noreferrer">
			{#if width > 640}
				<p>{linkedin}</p>
			{:else}
				<img loading="lazy" src={linkedinIcon} alt="Linkedin icon" class="w-6 h-6 dark:invert" />
			{/if}
		</a>
	</div>
</footer>

<style lang="postcss">
	a {
		text-decoration: none;
		color: var(--neutral-900);
	}
</style>
