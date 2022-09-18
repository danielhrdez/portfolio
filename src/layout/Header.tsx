/**
 * @author Daniel Hernández de León
 * @file Header.tsx
 * @description This is the main Header component
 */

import React from 'react';
import { ReactComponent as SettingsButton } from '../assets/settings-btn.svg';
import './Header.scss';
import me from '../assets/me.webp';
import { disableScroll } from '../utils/scroll';

/**
 * @desc This is the main Header component
 * @returns {JSX.Element} The main Header component
 */
function Header(): JSX.Element {
  const settingsExpand = (): void => {
    document.getElementById('settings')?.classList.add('show');
    disableScroll();
  };
  return (
    <header className="header">
      <img className="header__image" src={me} alt="me" />
      <nav className="header__nav-links">
        <a className="header__active" href="#content">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#experiences">Experiences</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <SettingsButton
        className='header__settings'
        onClick={settingsExpand}
      />
    </header>
  );
}

export default Header;
