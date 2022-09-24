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
  const [activeLink, setActiveLink] = useState('#content');
  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
  };
  const links = [
    { href: '#content', text: t('Home') },
    { href: '#about', text: t('About') },
    { href: '#experiences', text: t('Experience') },
    { href: '#projects', text: t('Projects') },
    { href: '#footer', text: t('Contact') },
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
            active={link.href === activeLink}
            onClick={handleLinkClick}
          />
        ))}
      </nav>
      <SettingsButton className="header__settings" onClick={settingsExpand} />
    </header>
  );
}

export default Header;
