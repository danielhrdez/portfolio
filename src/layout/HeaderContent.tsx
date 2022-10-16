import React, { useState, useEffect } from 'react';
import { ReactComponent as SettingsButton } from '../assets/images/settings-btn.svg';
import './scss/Header.scss';
import './scss/Content.scss';
import me from '../assets/images/me.webp';
import { disableScroll } from '../utils/scrollFunctions';
import HeaderLink from '../components/HeaderLink';
import { useTranslation } from 'react-i18next';
import Title from './content/Title';
import About from './content/About';
import Experiences from './content/Experiences';
import Projects from './content/Projects';
import Summary from './content/Summary';

/**
 * @desc This is the main Header component
 * @returns {JSX.Element} The main Header component
 */
function HeaderContent(): JSX.Element {
  const { t } = useTranslation();
  const settingsExpand = (): void => {
    document.querySelector('.settings')?.classList.add('show');
    disableScroll();
  };
  let scrolling = false;

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

  const [active, setActive] = useState(0);
  let prevOffset = 0;
  let prevActive = 0;
  
  const onScroll = (): void => {
    if (scrolling) {
      prevOffset = scrollY;
      return;
    }
    console.log(scrolling);
    scrolling = true;
    const direction = scrollY > prevOffset ? 1 : -1;
    const childs = document.getElementById('content')?.children;
    if (childs === undefined) return;
    const child = childs[prevActive + direction] as HTMLElement;
    if (child === undefined) return;
    window.scroll(0, child.offsetTop);
    prevOffset = scrollY;
    setActive(prevActive + direction);
    prevActive += direction;
    setTimeout(() => { scrolling = false }, 1000);
  };

  useEffect(() => {
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const checkActive = (n: number): string => {
    return active === n ? 'active' : '';
  };

  return (
    <>
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
      <main id="content">
        <div className={checkActive(0)}>
          <Title />
          <Summary />
        </div>
        <About className={checkActive(1)} />
        <Experiences className={checkActive(2)} />
        <Projects className={checkActive(3)} />
      </main>
    </>
  );
}

export default HeaderContent;
