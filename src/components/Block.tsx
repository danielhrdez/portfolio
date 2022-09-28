import React, { useState } from 'react';
import './scss/Block.scss';
import HoverParticles from './HoverParticles';
import Point2D from './Point2D';

interface BlockProps {
  id: string;
  children: React.ReactNode;
}

function Block(props: BlockProps): JSX.Element {
  const [mouse, setMouse] = useState(new Point2D(0, 0));
  const mouseMove = (event: React.MouseEvent): void => {
    setMouse(new Point2D(
      event.clientX - event.currentTarget.getBoundingClientRect().left,
      event.clientY - event.currentTarget.getBoundingClientRect().top,
    ));
  };
  return (
    <div id={props.id} className="block" onMouseMove={mouseMove}>
      {props.children}
      <HoverParticles className="block__particles" mouse={mouse} />
      <div className="block__background"></div>
    </div>
  );
}

export default Block;
