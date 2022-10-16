import React, { useState } from 'react';
import { ReactComponent as SettingsButton } from '../assets/images/settings-btn.svg';
import './scss/Header.scss';
import me from '../assets/images/me.webp';
import { disableScroll } from '../utils/scrollFunctions';
import HeaderLink from '../components/HeaderLink';
import { useTranslation } from 'react-i18next';

/**
 * @desc This is the main Header component
 * @returns {JSX.Element} The main Header component
 */
function Header(): JSX.Element {
  const { t } = useTranslation();
  const settingsExpand = (): void => {
    document.querySelector('.settings')?.classList.add('show');
    disableScroll();
  };
  const [activeLink, setActiveLink] = useState<string>(t('home'));
  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
  };
  const links = [
    { href: '#content', text: t('home') },
    { href: '#about', text: t('about') },
    { href: '#experiences', text: t('experience') },
    { href: '#projects', text: t('projects') },
    { href: '#footer', text: t('contact') },
  ];
  return (
    <header className="header">
      <img className="header__image" src={me} alt="me" />
      <nav className="header__nav-links">
        {links.map((link) => (
          <HeaderLink
            key={link.href}
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
