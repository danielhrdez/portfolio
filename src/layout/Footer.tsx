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
      <div>
        <h2>Phone</h2>
        <p>
          +34 603 666 913  
        </p>
      </div>
      <div>
        <h2>Email</h2>
        <p>
          danielhrdezdeleon@gmail.com  
        </p>
      </div>
      <div>
        <h2>Address</h2>
        <p>
          La Laguna, Tenerife, Spain
        </p>
      </div>
    </footer>
  );
}

export default Footer;
