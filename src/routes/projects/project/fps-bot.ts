import type { Project } from './project.d';
import cSharpIcon from '$assets/tech/c-sharp.svg';
import unityIcon from '$assets/tech/unity.svg';

export const fpsBot: Project = {
	name: 'FPS Bot',
	href: '',
	srcImg: '',
	srcCodeLink: 'https://github.com/DanielHrdez/FPSBot',
	description: 'Lorem ipsum.',
	technologies: [
		{
			src: cSharpIcon,
			alt: 'C#'
		},
		{
			src: unityIcon,
			alt: 'Unity'
		}
	]
};
