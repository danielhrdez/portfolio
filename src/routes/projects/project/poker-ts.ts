import type { Project } from './project.d';
import typescriptIcon from '$assets/tech/typescript.svg';
import pokerTSImage from '$assets/projects/poker.ts.webp';

export const pokerTS: Project = {
	name: 'PokerTS',
	href: 'https://danielhrdez.github.io/mvc-poker.ts/daniel-hernandez-poker.html',
	srcImg: pokerTSImage,
	srcCodeLink: 'https://github.com/DanielHrdez/mvc-poker.ts/tree/master',
	description: 'Lorem ipsum.',
	technologies: [
		{
			src: typescriptIcon,
			alt: 'Typescript'
		}
	]
};
