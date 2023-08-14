import type { Project } from './project.d';
import cSharpIcon from '$assets/tech/c-sharp.svg';
import unityIcon from '$assets/tech/unity.svg';
import herlockImg from '$assets/projects/herlock.webp';

export const vrGame: Project = {
	name: 'Herlock Sholmes - VR',
	srcImg: herlockImg,
	srcCodeLink: 'https://github.com/DanielHrdez/herlock-sholmes-vr',
	description: 'herlock-sholmes-vr',
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
