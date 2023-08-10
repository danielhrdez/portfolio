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

const assets = 'src/lib/assets/tech';

export const projects: Project[] = [
	{
		name: 'CloudML',
		href: 'https://cloudml.danielhrdez.dev/',
		srcImg: 'https://cloudml.danielhrdez.dev/',
		srcCodeLink: 'https://github.com/DanielHrdez/cloudml',
		description: 'Lorem ipsum.',
		techStack: [
			{
				src: `${assets}/sk-learn.webp`,
				alt: 'Sklearn'
			},
			{
				src: `${assets}/solid-js.svg`,
				alt: 'SolidJS'
			},
			{
				src: `${assets}/fast-api.svg`,
				alt: 'FastAPI'
			}
		]
	}
];
