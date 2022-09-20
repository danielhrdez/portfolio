/**
 * @author Daniel Hernández de León
 * @file Footer.tsx
 * @description This is the main Footer component
 */

import React from 'react';
import './scss/Footer.scss';

/**
 * @desc This is the main Footer component
 * @returns {JSX.Element} The main Footer component
 */
function Footer(): JSX.Element {
  return (
    <footer id="footer">
      <h1>Contact</h1>
      <div className="footer__phone">
        <h2>Phone</h2>
        <p>
          Currently working as a freelance software developer, I have worked on
          several projects, both web and mobile, using different technologies.
        </p>
      </div>
      <div className="footer_email">
        <h2>Email</h2>
        <p>
          Currently working as a freelance software developer, I have worked on
          several projects, both web and mobile, using different technologies.
        </p>
      </div>
      <div className="footer_address">
        <h2>Address</h2>
        <p>
          Currently working as a freelance software developer, I have worked on
          several projects, both web and mobile, using different technologies.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
