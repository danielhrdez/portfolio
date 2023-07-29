<script lang="ts">
	import phoneIcon from '$assets/phone.svg';
	import emailIcon from '$assets/email.svg';
	import linkedInIcon from '$assets/linked-in.svg';

	let width = 0;
	let phone = '+34 603 66 69 13';
	let email = 'contact@danielhrdez.dev';
	let linkedIn = 'LinkedIn';
	const maxWidth = 640;

	const aList = [
		{
			href: `tel:${phone}`,
			text: phone,
			src: phoneIcon,
			alt: 'Phone Icon'
		},
		{
			href: `mailto:${email}?subject=Hello%20Daniel!`,
			text: email,
			src: emailIcon,
			alt: 'Email Icon'
		},
		{
			href: `https://www.linkedin.com/in/danihrdez/`,
			text: linkedIn,
			src: linkedInIcon,
			alt: 'LinkedIn Icon'
		}
	];
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
			dark:bg-neutral-700
		"
	>
		{#each aList as aObject}
			<a href={aObject.href} class="dark:text-white">
				{#if width > maxWidth}
					<p>{aObject.text}</p>
				{:else}
					<img loading="lazy" src={aObject.src} alt={aObject.alt} class="w-6 h-6 dark:invert" />
				{/if}
			</a>
		{/each}
	</div>
</footer>

<style lang="postcss">
	a {
		text-decoration: none;
		color: var(--neutral-900);
	}
</style>
