import React from 'react';

/**
 * @desc This is the Projects component
 * @returns {JSX.Element} The Projects component
 */
function Projects(): JSX.Element {
  return (
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
  );
}
 
export default Projects;