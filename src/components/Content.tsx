/**
 * @author Daniel Hernández de León
 * @file Content.tsx
 * @description This is the main Content of the page
 */

import React from 'react';
import './Content.scss';

/**
 * @desc This is the Content component
 * @returns {JSX.Element} The Content component
 */
function Content(): JSX.Element {
  return (
    <main id="content">
      <div id="title">
        <h1>Daniel Hernández de León</h1>
        <h2>Software Developer</h2>
        <div id="underline"></div>
      </div>

      <div id="about" className="block-content">
        <h1>About</h1>
        <div className="about">
          <h2>Education</h2>
          <p>
            Currently working as a freelance software developer, I have worked
            on several projects, both web and mobile, using different
            technologies.
          </p>
        </div>
        <div className="about">
          <h2>Skills</h2>
          <p>
            Currently working as a freelance software developer, I have worked
            on several projects, both web and mobile, using different
            technologies.
          </p>
        </div>
        <div className="about">
          <h2>Interests</h2>
          <p>
            Currently working as a freelance software developer, I have worked
            on several projects, both web and mobile, using different
            technologies.
          </p>
        </div>
      </div>

      <div id="experiences" className="block-content">
        <h1>Experiences</h1>
        <div className="experience">
          <h2>Software Developer</h2>
          <h3>Freelance</h3>
          <p>
            Currently working as a freelance software developer, I have worked
            on several projects, both web and mobile, using different
            technologies.
          </p>
        </div>
        <div className="experience">
          <h2>Software Developer</h2>
          <h3>Freelance</h3>
          <p>
            Currently working as a freelance software developer, I have worked
            on several projects, both web and mobile, using different
            technologies.
          </p>
        </div>
        <div className="experience">
          <h2>Software Developer</h2>
          <h3>Freelance</h3>
          <p>
            Currently working as a freelance software developer, I have worked
            on several projects, both web and mobile, using different
            technologies.
          </p>
        </div>
      </div>

      <div id="projects" className="block-content">
        <h1>Projects</h1>
        <div className="project">
          <h2>Project 1</h2>
          <p>
            Currently working as a freelance software developer, I have worked
            on several projects, both web and mobile, using different
            technologies.
          </p>
        </div>
        <div className="project">
          <h2>Project 2</h2>
          <p>
            Currently working as a freelance software developer, I have worked
            on several projects, both web and mobile, using different
            technologies.
          </p>
        </div>
        <div className="project">
          <h2>Project 3</h2>
          <p>
            Currently working as a freelance software developer, I have worked
            on several projects, both web and mobile, using different
            technologies.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Content;
