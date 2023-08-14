import type { Project } from './project.d';
import pythonIcon from '$assets/tech/python.svg';
import handRecognizerImg from '$assets/projects/hand-recognizer.webp';

export const handRecognizer: Project = {
    name: 'Hand Recognizer',
    srcImg: handRecognizerImg,
    srcCodeLink: 'https://github.com/DanielHrdez/hand-recognizer',
    description: 'hand-recognition',
    technologies: [
        {
            src: pythonIcon,
            alt: 'Python'
        }
    ]
};
