import type { Project } from './project.d';
import typescriptIcon from '$assets/tech/typescript.svg';
import mandelbrotImg from '$assets/projects/mandelbrot.webp';

export const mandelbrot: Project = {
	name: 'Mandelbrot',
	href: 'https://danielhrdez.github.io/mandelbrot.ts/index.html',
	srcImg: mandelbrotImg,
	srcCodeLink: 'https://github.com/DanielHrdez/mandelbrot.ts',
	description: 'Lorem ipsum.',
	technologies: [
		{
			src: typescriptIcon,
			alt: 'Typescript'
		}
	]
};
