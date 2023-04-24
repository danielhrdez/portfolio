<script lang="ts">
	import danielPng from '$lib/images/daniel.png';
	import settingsIcon from '$lib/images/settings-btn.svg';
	import menuIcon from '$lib/images/menu-icon.svg';
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
</script>

<header
	class="
		flex
		justify-between
		p-1
		bg-neutral-100
		dark:bg-neutral-600
		drop-shadow-sm
	"
>
	<button on:click={toggleMenu} class="sm:hidden">
		<img src={menuIcon} alt="menu" class="w-10" />
	</button>
	<img src={danielPng} alt="daniel" class="w-10" />
	<nav
		class="
			sm:flex
			justify-around
			items-center
			container
			{navDisplayed ? 'flex' : 'hidden'}
			bg-neutral-100
			dark:bg-neutral-600
			top-0
			left-0
		"
	>
		<a href="/">
			{$t('page.home.title')}
		</a>
		<a href="/tech">
			{$t('page.tech.title')}
		</a>
		<a href="/experience">
			{$t('page.experience.title')}
		</a>
		<a href="/academic">
			{$t('page.academic.title')}
		</a>
		<a href="/projects">
			{$t('page.projects.title')}
		</a>
	</nav>
	<button on:click={toggleSettings}>
		<img src={settingsIcon} alt="settings" class="w-8" />
	</button>
</header>

<style>
	a {
		text-decoration: none;
		color: var(--neutral-900);
	}
</style>
