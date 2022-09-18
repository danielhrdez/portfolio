/**
 * @author Daniel Hernández de León
 * @file Content.tsx
 * @description This is the main Content of the page
 */

import React from 'react';
import './Content.scss';
import Title from './content/Title';
import About from './content/About';
import Experiences from './content/Experiences';
import Projects from './content/Projects';

/**
 * @desc This is the Content component
 * @returns {JSX.Element} The Content component
 */
function Content(): JSX.Element {
  return (
    <main className="content">
      <Title />
      <About />
      <Experiences />
      <Projects />
    </main>
  );
}

export default Content;
