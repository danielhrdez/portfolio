import React from 'react';
import './scss/Footer.scss';

/**
 * @desc This is the main Footer component
 * @returns {JSX.Element} The main Footer component
 */
function Footer(): JSX.Element {
  return (
    <footer id="footer">
      <div>
        <p>+34 603 66 69 13</p>
      </div>
      <div>
        <a href="mailto:daniel@danielhrdez.dev?subject=Hello%20Daniel!">
          <p>daniel@danielhrdez.dev</p>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/danielhrdez/"
          target="_blank"
          rel="noreferrer"
        >
          <p>Linkedin</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
