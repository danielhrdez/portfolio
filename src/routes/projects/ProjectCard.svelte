<script lang="ts">
	import Icon from '$components/ui/Icon.svelte';
	import githubIcon from '$assets/contact/github.svg';
	import { t } from 'svelte-i18n';
	import ArrowRight from '$components/icons/ArrowRight.svelte';

	import type { Project } from './project/project.d';
	import HoverIcon from '$components/ui/HoverIcon.svelte';
	import { onMount } from 'svelte';

	export let project: Project;
	const { name, href, srcImg, srcCodeLink, description, technologies } = project;

	let clickedDescription = false;

	let title: any;
	onMount(() => {
		if (name.length > 20) {
			const titleWidth = title.parentElement.scrollWidth;
			const parentWidth = title.parentElement.offsetWidth;
			const animation = title.animate(
				[
					{ transform: 'translateX(0)' },
					{ transform: `translateX(${parentWidth - titleWidth}px)` },
					{ transform: `translateX(${parentWidth - titleWidth}px)` },
					{ transform: 'translateX(0)' }
				],
				{
					duration: 10000,
					iterations: Infinity,
					direction: 'alternate',
					easing: 'ease-in-out',
					delay: 1000
				}
			);
			return () => animation.cancel();
		}
	});
</script>

<div
	class=" 
		rounded-2xl
		overflow-hidden
		w-[250px] h-[250px]
		border-2
		border-neutral-500/25
		drop-shadow-sm
		flex
		flex-col
	"
>
	<div
		class="
			p-2
			w-full
			h-1/6
			z-30
			bg-neutral-200
			dark:bg-neutral-800
			backdrop-blur
			flex
			justify-between
		"
	>
		<div class="overflow-hidden">
			<h2 bind:this={title}>
				<nobr><strong>{name}</strong></nobr>
			</h2>
		</div>
		<div class="flex right-0 gap-2 pl-2">
			{#if href}
				<a {href} target="_blank" class="w-6 h-6 text-black dark:text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.0"
						viewBox="0 0 1280 1280"
						fill="currentColor"
					>
						<path
							d="M609.5.6A640 640 0 0 0 12.1 516C3.6 559 .6 591.7.6 640c0 40.2 1.1 57 6 91a638.2 638.2 0 0 0 222.8 399.7A638 638 0 0 0 564 1275.4a530 530 0 0 0 76 4.1 506 506 0 0 0 79.5-4.6A640 640 0 0 0 1273.4 731a520 520 0 0 0 6-90.5c0-39.8-1.2-58.3-6-91.5A640.2 640.2 0 0 0 731 6.5a549.3 549.3 0 0 0-83-5.9c-17.9-.2-35.2-.2-38.5 0zm72.3 71.1c32.2 33.9 46.6 50.1 65.9 73.9A914 914 0 0 1 855.2 312a581.7 581.7 0 0 1 20.3 44.8c-.9.9-25.9 8.1-44.5 12.7a762 762 0 0 1-151.7 23l-8.3.5V228c0-130.4.3-165 1.2-165 .7 0 5 3.9 9.6 8.7zM609 230v163.1l-7.2-.6L580 391a784 784 0 0 1-94.5-13.1c-26.4-5.3-74.5-17.9-74.5-19.5a913.3 913.3 0 0 1 154.9-246.1A779 779 0 0 1 608.2 67c.4 0 .8 73.4.8 163zM513.4 77.2 505 87.5a959.6 959.6 0 0 0-145.5 232.6c-4 9.4-7.6 17.3-7.9 17.6-1.4 1.4-58.5-24.9-82.8-38.2C240.9 284.2 205 262 205 260s49.6-50.8 62.5-61.4A579.3 579.3 0 0 1 513.8 76c.2 0 0 .6-.4 1.2zM786 81.1a575.5 575.5 0 0 1 288.1 178c.8 1.6-.5 2.8-10.5 9.3a797.3 797.3 0 0 1-128 66.6c-.6 0-4-6.6-7.6-14.8A953.7 953.7 0 0 0 790.6 99.6l-15.4-18.7c-1.3-1.6-2-2.9-1.5-2.9.4 0 6 1.4 12.3 3.1zM206.7 335.9c33.3 20 66 36.6 102.4 52.1 10.7 4.6 19.8 8.6 20.2 9 .4.4-.3 4.2-1.7 8.6A848.7 848.7 0 0 0 302.1 513a805.1 805.1 0 0 0-9.7 92.9l-.7 3.1-114.1-.2-114.1-.3.3-6a572.6 572.6 0 0 1 97.8-286.2l4.4-6.2 13 8.4c7.1 4.7 19.6 12.5 27.7 17.4zm915.6-13.6a580.1 580.1 0 0 1 73.7 160.9 599 599 0 0 1 20.6 121.5l.5 4.3H996.3l-.7-12.8a794.4 794.4 0 0 0-32.7-181.7c-2.8-9.4-5.2-17.8-5.3-18.8-.1-1.4 4-3.5 18.3-9.7a863.7 863.7 0 0 0 135.6-74.3c1.1-.9 2.3-1.3 2.7-1.1.5.3 4.1 5.5 8.1 11.7zM900.1 422.5a716.3 716.3 0 0 1 33.1 178l.3 8-131.2.3-131.3.2V455.4l19.8-1.2a860.8 860.8 0 0 0 191.7-34.1c7.2-2.2 13.6-3.9 14.4-3.8.7.1 2.2 2.9 3.2 6.2zm-494.9-.1a850 850 0 0 0 184.1 31.8l19.7 1.2V609H355v-4.4c0-7.3 2.9-40 5.1-56.6a759 759 0 0 1 19-95.6c4.7-17.6 9.8-34.4 10.4-34.4l15.7 4.4zM292.4 673.2a717.1 717.1 0 0 0 5.6 64.3c6.2 48 18 100.3 33 145.8a80.5 80.5 0 0 1 4.2 15.8c-.4.4-6.3 3-13.2 5.7a845.2 845.2 0 0 0-130.3 67 95.3 95.3 0 0 1-17.6 9.6A573.4 573.4 0 0 1 64.5 688c-.3-4.7-.8-10.4-1.1-12.8l-.5-4.2h228.9l.6 2.2zM609 756.9v85.9l-9.7.6a858.1 858.1 0 0 0-203.4 35.2c-.7.4-8.4-22.8-13.8-41.6a746.7 746.7 0 0 1-26.7-155.3l-.7-10.7H609v85.9zm324.5-78.7A737.5 737.5 0 0 1 907.9 833c-5.2 18.2-14.8 48-15.5 48l-11.7-3.4a858.3 858.3 0 0 0-199.9-34.2l-9.8-.6V671h263.1l-.6 7.2zm283.1-3.5a578.4 578.4 0 0 1-110.7 306.7c-.4.5-8.3-3.8-17.6-9.6a866.4 866.4 0 0 0-127.5-65.9c-4.9-1.9-8.8-3.9-8.8-4.6a919.3 919.3 0 0 0 21.6-72.8c11.6-46.9 18.8-93 21.6-138.3l1.2-19.2h220.8l-.6 3.7zM609 1059.2l-.1 153.3-11.1-11.5A940.3 940.3 0 0 1 427 956.1c-4.4-9.6-7.9-17.9-7.7-18.5.9-2.1 45-13.2 75.7-19 36-6.8 78.8-11.8 105.8-12.4l8.2-.2v153.2zm105.5-150.6a792.8 792.8 0 0 1 142 27l10.8 3.1c.9.3 1.7 1 1.7 1.7 0 2.3-27.3 55.9-37.8 74.1a932 932 0 0 1-114 157.3c-20.6 23.3-42.1 45.2-44.3 45.2-1.9 0-1.9-3.8-1.9-155.6V905.7l14.3.7c7.8.4 21 1.4 29.2 2.2zm-339 83.9a950.1 950.1 0 0 0 127.5 196c7.1 8.5 12.7 15.5 12.4 15.5a576.4 576.4 0 0 1-286.8-158.9l-13.9-13.9 8.4-5.5c32.7-21.2 86-48.5 126.9-65l8.5-3.4 2.4 5.1 14.6 30.1zm571.2-24.8a905.6 905.6 0 0 1 110.2 58l8.4 5.5-14.4 14.5a577 577 0 0 1-222.3 140.2c-19.7 6.8-53.6 16.6-53.6 15.4 0-.2 5.3-6.8 11.8-14.6A963.2 963.2 0 0 0 919 981.1c5.2-11.1 10-20.1 10.6-20.1.7 0 8.4 3 17.1 6.7z"
						/>
					</svg>
				</a>
			{/if}
			<a href={srcCodeLink} class="w-6 h-6 flex items-center" target="_blank">
				<Icon src={githubIcon} alt="GitHub icon" />
			</a>
		</div>
	</div>
	<div class="w-full h-full relative">
		<div
			class="absolute flex gap-2 right-0 {!clickedDescription
				? 'opacity-100'
				: 'opacity-0'} bottom-0 m-2 p-2 rounded-xl bg-neutral-500/25 backdrop-blur-sm border border-neutral-500/50 dark:border-neutral-500/25"
		>
			{#each technologies as { src, alt }}
				<HoverIcon {src} {alt} />
			{/each}
		</div>
	</div>
	<div class="w-full">
		<button
			class="
				flex
				w-full
				bg-neutral-200
				dark:bg-neutral-800
				px-3 py-2
				justify-between
				relative
				rounded-b-2xl
			"
			on:click={() => (clickedDescription = !clickedDescription)}
		>
			<p>
				{$t('page.projects.description')}
			</p>
			<div class={clickedDescription ? '-rotate-90' : 'rotate-90'}>
				<ArrowRight />
			</div>
			<div class="absolute w-full h-full bg-neutral-300 dark:bg-neutral-700 -z-10 left-0" />
		</button>
		<p
			class="
				bg-neutral-300
				dark:bg-neutral-700
				{clickedDescription ? 'h-44 p-3' : 'h-0 px-3'}
				overflow-y-scroll
				transition-[height]
				text-sm
				text-neutral-700
				dark:text-neutral-300
			"
		>
			{$t('page.projects.' + description)}
		</p>
	</div>
	<img loading="lazy" src={srcImg} alt={name} class="object-cover absolute -z-20 rounded-3xl" />
</div>
