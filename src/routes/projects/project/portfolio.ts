import type { Project } from './project.d';
import portfolioWebp from '$assets/projects/portfolio.webp';
import svelteIcon from '$assets/tech/svelte.svg';
import tailwindIcon from '$assets/tech/tailwind-css.svg';

export const portfolio: Project = {
	name: 'Portfolio',
	href: 'https://www.danielhrdez.dev/',
	srcImg: portfolioWebp,
	srcCodeLink: 'https://github.com/DanielHrdez/portfolio',
	description: 'portfolio',
	technologies: [
		{
			src: svelteIcon,
			alt: 'Svelte'
		},
		{
			src: tailwindIcon,
			alt: 'Tailwind'
		}
	]
};
