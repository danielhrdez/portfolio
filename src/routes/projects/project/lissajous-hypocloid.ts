import type { Project } from './project.d';
import typescriptIcon from '$assets/tech/typescript.svg';
import lissajousImg from '$assets/projects/lissajous.webp';

export const lissajousHypocloid: Project = {
	name: 'Lissajous & Hypocloid Curve',
	href: 'https://danielhrdez.github.io/lissajous.ts/index.html',
	srcImg: lissajousImg,
	srcCodeLink: 'https://github.com/DanielHrdez/lissajous.ts',
	description: 'lissajous-curve',
	technologies: [
		{
			src: typescriptIcon,
			alt: 'Typescript'
		}
	]
};
