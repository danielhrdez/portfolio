import type { Project } from './project.d';

import { portfolio } from './portfolio';
import { cloudML } from './cloud-ml';
import { pokerTS } from './poker-ts';
import { eggLang } from './egg-lang';
import { fpsBot } from './fps-bot';
import { lissajousHypocloid } from './lissajous-hypocloid';
import { mandelbrot } from './mandelbrot';
import { nMagicSquare } from './n-magic-square';
import { pathFinder } from './path-finder';
import { prfPower } from './prf-power';
import { ramMachine } from './ram-machine';
import { turingMachine } from './turing-machine';
import { handRecognizer } from './hand-recognizer';
import { vrGame } from './vr-game';

export const projects: Project[] = [
	portfolio,
	cloudML,
	fpsBot,
	pathFinder,
	vrGame,
	handRecognizer,
	lissajousHypocloid,
	eggLang,
	nMagicSquare,
	mandelbrot,
	pokerTS,
	ramMachine,
	prfPower,
	turingMachine
];
