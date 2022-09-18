/**
 * @author Daniel Hernández de León
 * @file Header.tsx
 * @description This is the main Header component
 */

import React from 'react';
import { ReactComponent as SettingsButton } from '../assets/settings-btn.svg';
import './Header.scss';

/**
 * @desc This is the main Header component
 * @returns {JSX.Element} The main Header component
 */
function Header(): JSX.Element {
  return (
    <header id="header">
      <img className="image" src="assets/me.webp" alt="me" />
      <nav id="nav-links">
        <a className="active" href="#content">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#experiences">Experiences</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <SettingsButton />
    </header>
  );
}

export default Header;
