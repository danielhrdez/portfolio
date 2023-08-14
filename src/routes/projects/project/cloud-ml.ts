import type { Project } from './project.d';
import skLearnIcon from '$assets/tech/sk-learn.svg';
import solidJSIcon from '$assets/tech/solid-js.svg';
import fastAPIIcon from '$assets/tech/fast-api.svg';
import cloudMLImg from '$assets/projects/cloudml.webp';

export const cloudML: Project = {
	name: 'CloudML',
	href: 'https://cloudml.danielhrdez.dev/',
	srcImg: cloudMLImg,
	srcCodeLink: 'https://github.com/DanielHrdez/cloudml',
	description: 'cloud-ml',
	technologies: [
		{
			src: skLearnIcon,
			alt: 'Sklearn'
		},
		{
			src: solidJSIcon,
			alt: 'SolidJS'
		},
		{
			src: fastAPIIcon,
			alt: 'FastAPI'
		}
	]
};
