import type { Project } from './project.d';
import javascriptIcon from '$assets/tech/javascript.svg';
import cppIcon from '$assets/tech/cpp.svg';
import pathfinder from '$assets/projects/pathfinder.webp';

export const pathFinder: Project = {
	name: 'PathFinder',
	href: 'https://danielhrdez.github.io/Path-Finder/',
	srcImg: pathfinder,
	srcCodeLink: 'https://github.com/DanielHrdez/Path-Finder',
	description: 'Lorem ipsum.',
	technologies: [
		{
			src: javascriptIcon,
			alt: 'Javascript'
		},
		{
			src: cppIcon,
			alt: 'C++'
		}
	]
};
