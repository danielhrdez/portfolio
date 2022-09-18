/**
 * @author Daniel Hernández de León
 * @file About.tsx
 * @description This is the main About of the page
 */

import React from 'react';

/**
 * @desc This is the About component
 * @returns {JSX.Element} The About component
 */
function About(): JSX.Element {
  return (
    <div className="about block-content">
      <h1>About</h1>
      <div className="about__education">
        <h2>Education</h2>
        <p>
          Currently working as a freelance software developer, I have worked
          on several projects, both web and mobile, using different
          technologies.
        </p>
      </div>
      <div className="about__skills">
        <h2>Skills</h2>
        <p>
          Currently working as a freelance software developer, I have worked
          on several projects, both web and mobile, using different
          technologies.
        </p>
      </div>
      <div className="about__interests">
        <h2>Interests</h2>
        <p>
          Currently working as a freelance software developer, I have worked
          on several projects, both web and mobile, using different
          technologies.
        </p>
      </div>
    </div>
  );
}

export default About;
 
