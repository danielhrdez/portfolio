import React, { useState } from 'react';
import { ReactComponent as SettingsButton } from '../assets/images/settings-btn.svg';
import './scss/Header.scss';
import me from '../assets/images/me.webp';
import { disableScroll } from '../utils/scrollFunctions';
import HeaderLink from '../components/HeaderLink';
import language from '../utils/language';

/**
 * @desc This is the main Header component
 * @returns {JSX.Element} The main Header component
 */
function Header(): JSX.Element {
  const settingsExpand = (): void => {
    document.querySelector('.settings')?.classList.add('show');
    disableScroll();
  };
  const [activeLink, setActiveLink] = useState(language('Home'));
  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
  };
  const links = [
    { href: '#content', text: language('Home') },
    { href: '#about', text: language('About') },
    { href: '#experiences', text: language('Experience') },
    { href: '#projects', text: language('Projects') },
    { href: '#footer', text: language('Contact') },
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
      <SettingsButton className="header__settings" onClick={settingsExpand} />
    </header>
  );
}

export default Header;
