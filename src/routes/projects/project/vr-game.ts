import type { Project } from './project.d';
import cSharpIcon from '$assets/tech/c-sharp.svg';
import unityIcon from '$assets/tech/unity.svg';

export const vrGame: Project = {
	name: 'Herlock Sholmes - VR',
	href: '',
	srcImg: '',
	srcCodeLink: '',
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
