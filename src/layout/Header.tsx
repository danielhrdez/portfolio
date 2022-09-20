/**
 * @author Daniel Hernández de León
 * @file Header.tsx
 * @description This is the main Header component
 */

import React, { useState } from 'react';
import { ReactComponent as SettingsButton } from '../assets/images/settings-btn.svg';
import './Header.scss';
import me from '../assets/images/me.webp';
import { disableScroll } from '../utils/scrollfunctions';
import HeaderLink from '../components/HeaderLink';
import LanguageJSON from '../data/language.json';
import getLanguage from '../utils/getlanguage';

/**
 * @desc This is the main Header component
 * @returns {JSX.Element} The main Header component
 */
function Header(): JSX.Element {
  const language = getLanguage();
  const settingsExpand = (): void => {
    document.querySelector('.settings')?.classList.add('show');
    disableScroll();
  };
  const [activeLink, setActiveLink] = useState(LanguageJSON.Home[language]);
  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
  };
  const links = [
    { href: '#content', text: LanguageJSON.Home[language] },
    { href: '#about', text: LanguageJSON.About[language] },
    { href: '#experiences', text: LanguageJSON.Experience[language] },
    { href: '#projects', text: LanguageJSON.Projects[language] },
    { href: '#footer', text: LanguageJSON.Contact[language] },
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
