import React from 'react';
import './scss/Content.scss';
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
    <main id="content">
      <Title />
      Summary text about me
      <About />
      <Experiences />
      <Projects />
    </main>
  );
}

export default Content;
