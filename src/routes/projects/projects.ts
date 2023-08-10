import skLearnIcon from '$assets/tech/sk-learn.webp';
import solidJSIcon from '$assets/tech/solid-js.svg';
import fastAPIIcon from '$assets/tech/fast-api.svg';

type Project = {
	name: string;
	href: string;
	srcImg: string;
	srcCodeLink: string;
	description: string;
	techStack: {
		src: string;
		alt: string;
	}[];
};

const assets = '$assets/tech';

export const projects: Project[] = [
	{
		name: 'CloudML',
		href: 'https://cloudml.danielhrdez.dev/',
		srcImg: 'https://cloudml.danielhrdez.dev/',
		srcCodeLink: 'https://github.com/DanielHrdez/cloudml',
		description: 'Lorem ipsum.',
		techStack: [
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
	}
];
