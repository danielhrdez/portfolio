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
      <HoverParticles className="block__particles" />
      {props.children}
    </div>
  );
}

export default Block;
