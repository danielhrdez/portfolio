import type { Project } from './project.d';
import pythonIcon from '$assets/tech/python.svg';
import handRecognizerImg from '$assets/projects/hand-recognizer.webp';

export const handRecognizer: Project = {
    name: 'Hand Recognizer',
    href: '',
    srcImg: handRecognizerImg,
    srcCodeLink: '',
    description: 'Lorem ipsum.',
    technologies: [
        {
            src: pythonIcon,
            alt: 'Python'
        }
    ]
};
