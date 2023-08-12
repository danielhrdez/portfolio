import skLearnIcon from '$assets/tech/sk-learn.svg';
import solidJSIcon from '$assets/tech/solid-js.svg';
import fastAPIIcon from '$assets/tech/fast-api.svg';
import typescriptIcon from '$assets/tech/typescript.svg';
import javascriptIcon from '$assets/tech/javascript.svg';
import javaIcon from '$assets/tech/javascript.svg'; // TODO
import cppIcon from '$assets/tech/javascript.svg'; // TODO
import csharpIcon from '$assets/tech/javascript.svg'; // TODO
import pythonIcon from '$assets/tech/javascript.svg'; // TODO
import prologIcon from '$assets/tech/javascript.svg'; // TODO
import svelteIcon from '$assets/tech/javascript.svg'; // TODO
import tailwindIcon from '$assets/tech/javascript.svg'; // TODO

import pokerTSImage from '$assets/projects/poker.ts.png';
import pathfinder from '$assets/projects/pathfinder.webp';

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

const portfolio: Project = {
	name: 'Portfolio',
	href: 'https://www.danielhrdez.dev/',
	srcImg: 'https://www.danielhrdez.dev/',
	srcCodeLink: 'https://github.com/DanielHrdez/portfolio',
	description: 'Lorem ipsum.',
	techStack: [
		{
			src: svelteIcon,
			alt: 'Svelte'
		},
		{
			src: tailwindIcon,
			alt: 'Tailwind'
		},
	]
};

const cloudML: Project = {
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
};

const pokerTS: Project = {
	name: 'PokerTS',
	href: 'https://danielhrdez.github.io/mvc-poker.ts/daniel-hernandez-poker.html',
	srcImg: pokerTSImage,
	srcCodeLink: 'https://github.com/DanielHrdez/mvc-poker.ts/tree/master',
	description: 'Lorem ipsum.',
	techStack: [
		{
			src: typescriptIcon,
			alt: 'Typescript'
		}
	]
};

const pathFinder: Project = {
	name: 'PathFinder',
	href: 'https://danielhrdez.github.io/Path-Finder/',
	srcImg: pathfinder,
	srcCodeLink: 'https://github.com/DanielHrdez/Path-Finder',
	description: 'Lorem ipsum.',
	techStack: [
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

const mandelbrot: Project = {
	name: 'Mandelbrot',
	href: 'https://danielhrdez.github.io/mandelbrot.ts/index.html',
	srcImg: '',
	srcCodeLink: 'https://github.com/DanielHrdez/mandelbrot.ts',
	description: 'Lorem ipsum.',
	techStack: [
		{
			src: typescriptIcon,
			alt: 'Typescript'
		}
	]
};

const lissajousHypocloid: Project = {
	name: 'Lissajous & Hypocloid',
	href: 'https://danielhrdez.github.io/lissajous.ts/index.html',
	srcImg: '',
	srcCodeLink: 'https://github.com/DanielHrdez/lissajous.ts',
	description: 'Lorem ipsum.',
	techStack: [
		{
			src: typescriptIcon,
			alt: 'Typescript'
		}
	]
};

const eggLang: Project = {
	name: 'Egg Language',
	href: '',
	srcImg: '',
	srcCodeLink: 'https://github.com/DanielHrdez/egg-language',
	description: 'Lorem ipsum.',
	techStack: [
		{
			src: javascriptIcon,
			alt: 'Javascript'
		}
	]
};

const ramMachine: Project = {
	name: 'RAM Machine',
	href: '',
	srcImg: '',
	srcCodeLink: 'https://github.com/DanielHrdez/RAM-Machine',
	description: 'Lorem ipsum.',
	techStack: [
		{
			src: javaIcon,
			alt: 'Java'
		}
	]
};

const fpsBot: Project = {
	name: 'FPS Bot',
	href: '',
	srcImg: '',
	srcCodeLink: 'https://github.com/DanielHrdez/FPSBot',
	description: 'Lorem ipsum.',
	techStack: [
		{
			src: csharpIcon,
			alt: 'C#'
		}
	]
};

const prfPower: Project = {
	name: 'PRF Power',
	href: '',
	srcImg: '',
	srcCodeLink: 'https://github.com/DanielHrdez/prf-power',
	description: 'Lorem ipsum.',
	techStack: [
		{
			src: javaIcon,
			alt: 'Java'
		}
	]
};

const turingMachine: Project = {
	name: 'Turing Machine',
	href: '',
	srcImg: '',
	srcCodeLink: 'https://github.com/DanielHrdez/turing',
	description: 'Lorem ipsum.',
	techStack: [
		{
			src: cppIcon,
			alt: 'C++'
		}
	]
};

const nMagicSquare: Project = {
	name: 'N Magic Square',
	href: '',
	srcImg: '',
	srcCodeLink: 'https://github.com/DanielHrdez/n-magic-square',
	description: 'Lorem ipsum.',
	techStack: [
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

export const projects: Project[] = [
	portfolio,
	cloudML,
	fpsBot,
	pathFinder,
	lissajousHypocloid,
	eggLang,
	nMagicSquare,
	mandelbrot,
	pokerTS,
	prfPower,
	turingMachine,
	ramMachine
];
