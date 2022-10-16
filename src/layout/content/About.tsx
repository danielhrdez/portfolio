import React from 'react';
import Block from '../../components/Block';

/**
 * @desc This is the About component
 * @returns {JSX.Element} The About component
 */
function About(props: { className?: string }): JSX.Element {
  return (
    <Block id="about" className={props.className}>
      <div className="about__education">
        <h2>Education</h2>
        <p>
          Currently working as a freelance software developer, I have worked on
          several projects, both web and mobile, using different technologies.
        </p>
      </div>
      <div className="about__skills">
        <h2>Skills</h2>
        <p>
          Currently working as a freelance software developer, I have worked on
          several projects, both web and mobile, using different technologies.
        </p>
      </div>
      <div className="about__interests">
        <h2>Interests</h2>
        <p>
          Currently working as a freelance software developer, I have worked on
          several projects, both web and mobile, using different technologies.
        </p>
      </div>
    </Block>
  );
}

export default About;
