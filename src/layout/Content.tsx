import React from 'react';
import './scss/Content.scss';
import Title from './content/Title';
import About from './content/About';
import Experiences from './content/Experiences';
import Projects from './content/Projects';
import Summary from './content/Summary';

/**
 * @desc This is the Content component
 * @returns {JSX.Element} The Content component
 */
function Content(): JSX.Element {
  return (
    <main id="content">
      <Title />
      <Summary />
      <About />
      <Experiences />
      <Projects />
    </main>
  );
}

export default Content;
