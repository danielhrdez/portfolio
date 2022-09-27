import React from 'react';
import './scss/Block.scss';
import HoverParticles from './HoverParticles';

interface BlockProps {
  id: string;
  children: React.ReactNode;
}

function Block(props: BlockProps): JSX.Element {
  return (
    <div id={props.id} className="block">
      {props.children}
      <HoverParticles className="block__particles" maxparticles={10} />
      <div className="block__background"></div>
    </div>
  );
}

export default Block;
