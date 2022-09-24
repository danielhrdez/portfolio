import React from 'react';
import Block from '../../components/Block';

/**
 * @desc This is the Experiences component
 * @returns {JSX.Element} The Experiences component
 */
function Experiences(): JSX.Element {
  return (
    <Block id="experiences">
      <h1>Experience</h1>
      <div className="experience">
        <h2>Software Developer</h2>
        <h3>Freelance</h3>
        <p>
          Currently working as a freelance software developer, I have worked on
          several projects, both web and mobile, using different technologies.
        </p>
      </div>
      <div className="experience">
        <h2>Software Developer</h2>
        <h3>Freelance</h3>
        <p>
          Currently working as a freelance software developer, I have worked on
          several projects, both web and mobile, using different technologies.
        </p>
      </div>
      <div className="experience">
        <h2>Software Developer</h2>
        <h3>Freelance</h3>
        <p>
          Currently working as a freelance software developer, I have worked on
          several projects, both web and mobile, using different technologies.
        </p>
      </div>
    </Block>
  );
}

export default Experiences;
