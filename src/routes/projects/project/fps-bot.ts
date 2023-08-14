import type { Project } from './project.d';
import cSharpIcon from '$assets/tech/c-sharp.svg';
import unityIcon from '$assets/tech/unity.svg';
import fpsBotImg from '$assets/projects/fps-bot.webp';

export const fpsBot: Project = {
	name: 'FPS Bot',
	srcImg: fpsBotImg,
	srcCodeLink: 'https://github.com/DanielHrdez/FPSBot',
	description: 'fps-bot',
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
