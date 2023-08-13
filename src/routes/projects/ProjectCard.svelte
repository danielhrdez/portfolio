<script lang="ts">
	import Icon from '$components/ui/Icon.svelte';
	import githubIcon from '$assets/contact/github.svg';
	import { t } from 'svelte-i18n';
	import ArrowRight from '$components/icons/ArrowRight.svelte';

	import type { Project } from './project/project.d';
	import HoverIcon from '$components/ui/HoverIcon.svelte';

	export let { name, description, srcImg, srcCodeLink, href, technologies }: Project = {
		name: '',
		description: '',
		srcImg: '',
		srcCodeLink: '',
		href: '',
		technologies: []
	};

	let clickedDescription = false;
</script>

<div
	class=" 
		rounded-2xl
		overflow-hidden
		w-[250px] h-[250px]
		drop-shadow-md
		hover:scale-[1.01]
	"
>
	<div
		class="
			p-3
			w-[250px]
			h-[50px]
			absolute
			z-30
		"
	>
		<div class="relative w-full h-full">
			<a {href} class="absolute" target="_blank">
				<h2 class="font-bold text-white text-shadow">
					{name}
				</h2>
			</a>
			<a href={srcCodeLink} class="absolute right-0 svg-stroke" target="_blank">
				<Icon src={githubIcon} alt="GitHub icon" invert={false} />
			</a>
		</div>
	</div>
	<div class="absolute bottom-0 w-full z-20 text-white">
		<div
			class="
				w-full h-10
				bg-gradient-to-b
				from-black/0
				to-neutral-800/50
				p-2
			"
		>
			<div class="relative {!clickedDescription ? 'opacity-100' : 'opacity-0'}">
				<div class="absolute flex gap-2 right-0">
					{#each technologies as { src, alt }}
						<HoverIcon {src} {alt} />
					{/each}
				</div>
			</div>
		</div>
		<button
			class="
				flex
				w-full
				bg-neutral-800/50
				p-3
				justify-between
				relative
				test
			"
			on:click={() => (clickedDescription = !clickedDescription)}
		>
			<p>
				{$t('page.projects.description')}
			</p>
			<div class={clickedDescription ? '-rotate-90' : 'rotate-90'}>
				<ArrowRight />
			</div>
		</button>

		<p
			class="
				bg-neutral-600
				{clickedDescription ? 'h-32 p-3' : 'h-0'}
				overflow-y-scroll
				transition-all
			"
		>
			{description}
		</p>
	</div>
	<img
		loading="lazy"
		src={srcImg}
		alt={name}
		class="
			w-full
			h-full
			object-cover
			opacity-75
			blur-[1px]
		"
	/>
</div>

<style>
	.test::before {
		width: 16px;
		height: 16px;
		background: rgb(82, 82, 82);
		bottom: 0px;
		position: absolute;
		display: block;
		mask-image: radial-gradient(circle 16px at 16px 0, transparent 0, transparent 17px, black 16px);
		-webkit-mask-image: radial-gradient(
			circle 16px at 16px 0,
			transparent 0,
			transparent 17px,
			black 16px
		);
		left: 0px;
		content: '';
	}

	.test::after {
		width: 16px;
		height: 16px;
		background: rgb(82, 82, 82);
		bottom: 0px;
		position: absolute;
		display: block;
		mask-image: radial-gradient(circle 16px at 16px 0, transparent 0, transparent 17px, black 16px);
		-webkit-mask-image: radial-gradient(
			circle 16px at 0px 0,
			transparent 0,
			transparent 17px,
			black 16px
		);
		right: 0px;
		content: '';
	}

	.text-shadow {
		--color: #000;
		text-shadow: 1px 0 var(--color), -1px 0 var(--color), 0 1px var(--color), 0 -1px var(--color);
	}

	.svg-stroke {
		filter: drop-shadow(0px 0px 1px rgb(255, 255, 255)) invert(100%);
	}
</style>
