import type { Project } from './project.d';
import pythonIcon from '$assets/tech/python.svg';
import prologIcon from '$assets/tech/prolog.svg';
import nMagicSquareImg from '$assets/projects/n-magic-square.webp';

export const nMagicSquare: Project = {
	name: 'N Magic Square',
	href: '',
	srcImg: nMagicSquareImg,
	srcCodeLink: 'https://github.com/DanielHrdez/n-magic-square',
	description: 'Lorem ipsum.',
	technologies: [
		{
			src: pythonIcon,
			alt: 'Python'
		},
		{
			src: prologIcon,
			alt: 'Prolog'
		}
	]
};
