/**
 * @author Daniel Hernández de León
 * @file Header.tsx
 * @description This is the main Header component
 */

import React, { useState } from 'react';
import { ReactComponent as SettingsButton } from '../assets/settings-btn.svg';
import './Header.scss';
import me from '../assets/me.webp';
import { disableScroll } from '../utils/scrollFunctions';
import HeaderLink from '../components/HeaderLink';

/**
 * @desc This is the main Header component
 * @returns {JSX.Element} The main Header component
 */
function Header(): JSX.Element {
  const settingsExpand = (): void => {
    document.querySelector('.settings')?.classList.add('show');
    disableScroll();
  };
  const [activeLink, setActiveLink] = useState('Home');
  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
  };
  const links = [
    { href: '#title', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#experiences', text: 'Experiences' },
    { href: '#projects', text: 'Projects' },
    { href: '#footer', text: 'Contact' },
  ];
  return (
    <header className="header">
      <img className="header__image" src={me} alt="me" />
      <nav className="header__nav-links">
        {links.map((link) => (
          <HeaderLink
            key={link.text}
            href={link.href}
            text={link.text}
            active={link.text === activeLink}
            onClick={handleLinkClick}
          />
        ))}
      </nav>
      <SettingsButton
        className='header__settings'
        onClick={settingsExpand}
      />
    </header>
  );
}

export default Header;
