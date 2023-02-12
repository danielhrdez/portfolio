// import React, { useState, useEffect } from 'react';
import React from 'react';
import './scss/Content.scss';
import Description from './content/Description';
import About from './content/About';
import Experiences from './content/Experiences';
import Projects from './content/Projects';

/**
 * @desc This is the Content component
 * @returns {JSX.Element} The Content component
 */
function Content(): JSX.Element {
  // const [active, setActive] = useState(0);
  // let prevOffset = 0;
  // let prevActive = 0;
  // let scrolling = false;
  
  // useEffect(() => {
  //   const onScroll = (): void => {
  //     if (scrolling) {
  //       prevOffset = scrollY;
  //       return;
  //     }
  //     scrolling = true;
  //     const direction = scrollY > prevOffset ? 1 : -1;
  //     const childs = document.getElementById('content')?.children;
  //     if (childs === undefined) return;
  //     const child = childs[prevActive + direction] as HTMLElement;
  //     if (child === undefined) return;
  //     window.scroll(0, child.offsetTop);
  //     prevOffset = scrollY;
  //     setActive(prevActive + direction);
  //     prevActive += direction;
  //     setTimeout(() => { scrolling = false }, 1000);
  //   };
  //   window.removeEventListener('scroll', onScroll);
  //   window.addEventListener('scroll', onScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  // const checkActive = (n: number): string => {
  //   return active === n ? 'active' : '';
  // };

  return (
    <main id="content">
      {/* <div className={checkActive(0)}>
        <Title />
        <Summary />
      </div>
      <About className={checkActive(1)} />
      <Experiences className={checkActive(2)} />
      <Projects className={checkActive(3)} /> */}
      <Description />
      <About />
      <Experiences />
      <Projects />
    </main>
  );
}

export default Content;
