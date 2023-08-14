import type { Project } from './project.d';
import javascriptIcon from '$assets/tech/javascript.svg';
import eggLangImg from '$assets/projects/egg-lang.webp';

export const eggLang: Project = {
	name: 'Egg Language',
	srcImg: eggLangImg,
	srcCodeLink: 'https://github.com/DanielHrdez/egg-language',
	description: 'egg-lang',
	technologies: [
		{
			src: javascriptIcon,
			alt: 'Javascript'
		}
	]
};
