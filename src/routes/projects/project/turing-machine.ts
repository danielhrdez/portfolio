import type { Project } from './project.d';
import cppIcon from '$assets/tech/cpp.svg';
import turingMachineImg from '$assets/projects/turing-machine.webp';

export const turingMachine: Project = {
	name: 'Turing Machine',
	srcImg: turingMachineImg,
	srcCodeLink: 'https://github.com/DanielHrdez/turing',
	description: 'turing-machine',
	technologies: [
		{
			src: cppIcon,
			alt: 'C++'
		}
	]
};
