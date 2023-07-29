<script lang="ts">
	import danielWebp from '$assets/daniel.webp';
	import settingsIcon from '$assets/settings-btn.svg';
	import menuIcon from '$assets/menu-icon.svg';
	import { createEventDispatcher } from 'svelte';
	import { t } from 'svelte-i18n';

	const dispatch = createEventDispatcher();

	let navDisplayed = false;

	function toggleSettings() {
		dispatch('settings');
	}

	function toggleMenu() {
		navDisplayed = !navDisplayed;
	}

	$: links = [
		{
			href: '/#home',
			text: $t('page.home.title')
		},
		{
			href: '/#experience',
			text: $t('page.experience.title')
		},
		{
			href: '/#education',
			text: $t('page.education.title')
		},
		{
			href: '/projects',
			text: $t('page.projects.title')
		}
	];
</script>

<header
	class="
		flex
		justify-between
		py-1
		px-3
		drop-shadow-sm
		z-20
	"
>
	<button on:click={toggleMenu} class="sm:hidden dark:invert">
		<img loading="lazy" src={menuIcon} alt="menu" class="w-8 h-8" />
	</button>
	<img src={danielWebp} alt="me" class="w-10 h-10" />
	<nav
		class="
			flex
			absolute sm:relative
			flex-col sm:flex-row
			justify-around
			items-start sm:items-center
			{navDisplayed ? 'top-12' : '-top-20'}
			sm:top-0
			container
			bg-neutral-100 dark:bg-neutral-700
			pl-4 sm:pl-0
			pb-2 sm:pb-0
			left-0
			rounded-b-xl sm:rounded-none
			{navDisplayed ? 'drop-shadow-md' : ''} sm:drop-shadow-none
			-z-10 sm:z-10
		"
	>
		{#each links as link}
			<a href={link.href} class="dark:text-white">
				{link.text}
			</a>
		{/each}
	</nav>
	<button on:click={toggleSettings}>
		<img
			src={settingsIcon}
			alt="settings"
			class="w-8 h-8 dark:invert hover:rotate-90 hover-scale"
		/>
	</button>
	<div
		class="
			bg-neutral-100
			dark:bg-neutral-700
	 		w-full
			h-full
			absolute
			inset-0
			-z-10
		"
	/>
</header>

<style>
	a {
		text-decoration: none;
		color: var(--neutral-900);
	}
</style>
