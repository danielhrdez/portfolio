import type { Project } from './project.d';
import javaIcon from '$assets/tech/java.svg';
import prfPowerImg from '$assets/projects/prf-power.webp';

export const prfPower: Project = {
	name: 'PRF Power',
	srcImg: prfPowerImg,
	srcCodeLink: 'https://github.com/DanielHrdez/prf-power',
	description: 'prf-power',
	technologies: [
		{
			src: javaIcon,
			alt: 'Java'
		}
	]
};
