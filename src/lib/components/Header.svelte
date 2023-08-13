<script lang="ts">
	import danielWebp from '$assets/daniel.webp';
	import menuIcon from '$assets/menu-icon.svg';
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';
	import { page } from '$app/stores';
	import { writable, get } from 'svelte/store';
	import Icon from './ui/Icon.svelte';
	import ToggleLanguage from './ToggleLanguage.svelte';
	import ToggleTheme from './ToggleTheme.svelte';

	let navDisplayed = false;

	function toggleMenu() {
		navDisplayed = !navDisplayed;
	}

	enum Route {
		ABOUT = '/',
		PROJECTS = '/projects',
		CONTACT = '/contact'
	}

	$: links = [
		{
			href: Route.ABOUT,
			text: $t('page.about.title'),
			active: Route.ABOUT === $page.route.id
		},
		{
			href: Route.PROJECTS,
			text: $t('page.projects.title'),
			active: Route.PROJECTS === $page.route.id
		},
		{
			href: Route.CONTACT,
			text: $t('page.contact.title'),
			active: Route.CONTACT === $page.route.id
		}
	];

	function moveIndicator(navBar: HTMLElement, oldTab: HTMLElement | null, newTab: HTMLElement) {
		let transitionWidth = 0;
		const isRight = oldTab?.compareDocumentPosition(newTab) === 4;
		const newWidth = newTab.offsetWidth / navBar.offsetWidth;
		const newPosition = newTab.offsetLeft + 'px';

		if (oldTab !== null) {
			if (isRight) {
				transitionWidth = newTab.offsetLeft + newTab.offsetWidth - oldTab.offsetLeft;
			} else {
				transitionWidth = oldTab.offsetLeft + oldTab.offsetWidth - newTab.offsetLeft;
				navBar.style.setProperty('--_left', newPosition);
			}
			navBar.style.setProperty('--_width', transitionWidth / navBar.offsetWidth + '');
		}

		setTimeout(() => {
			navBar.style.setProperty('--_left', newPosition);
			navBar.style.setProperty('--_width', newWidth + '');
		}, 200);
	}

	let navBar: HTMLElement;

	onMount(() => {
		if ($page.route.id) {
			setTimeout(() => {
				navBar.style.setProperty('--_opacity', '1');
				navBar.style.setProperty('--_duration', '.5s');
			}, 400);
		}
	});

	let newTab = writable<HTMLElement | null>(null);

	$: if ($page && width) {
		setTimeout(() => {
			let oldTab = get(newTab);
			newTab.set(document.querySelector('.nav-a-active') as HTMLElement);
			if (navBar !== null && newTab !== null) {
				moveIndicator(navBar, oldTab, get(newTab)!);
			}
		}, 10);
	}

	let width = 0;
</script>

<svelte:window bind:innerWidth={width} />

<header
	class="
        flex
        justify-between
		gap-[15vw]
        py-1
        px-3
        drop-shadow-sm
        z-20
    "
>
	<button on:click={toggleMenu} class="sm:hidden">
		<Icon src={menuIcon} alt="menu" />
	</button>
	<img src={danielWebp} alt="me" class="w-10 h-10 rounded-md" />
	<nav
		bind:this={navBar}
		class="
            flex
            absolute sm:relative
            flex-row
            justify-between
            items-start sm:items-center
            {navDisplayed ? 'top-12' : '-top-20'}
            sm:top-0
            container
            bg-neutral-100 dark:bg-neutral-700
            px-4 sm:pl-0
            pb-2 sm:pb-0
            left-0
            rounded-b-xl sm:rounded-none
            {navDisplayed ? 'drop-shadow-md' : ''} sm:drop-shadow-none
            -z-10 sm:z-10
        "
	>
		{#each links as link}
			<a
				href={link.href}
				class="
					{link.active
					? `
						nav-a-active
						text-black
						dark:text-white
					`
					: 'text-neutral-500 dark:text-neutral-400'}
				"
			>
				{link.text}
			</a>
		{/each}
	</nav>
	<div class="flex items-center">
		<ToggleTheme />
		<ToggleLanguage />
	</div>
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
