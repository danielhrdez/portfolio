import type { Project } from './project.d';
import javaIcon from '$assets/tech/java.svg';
import ramMachineImg from '$assets/projects/ram-machine.webp';

export const ramMachine: Project = {
	name: 'RAM Machine',
	srcImg: ramMachineImg,
	srcCodeLink: 'https://github.com/DanielHrdez/RAM-Machine',
	description: 'ram-machine',
	technologies: [
		{
			src: javaIcon,
			alt: 'Java'
		}
	]
};
