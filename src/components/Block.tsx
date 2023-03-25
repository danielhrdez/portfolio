import React from 'react';
import './scss/Block.scss';
import MaskedText from './MaskedText';

interface BlockProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

function Block(props: BlockProps): JSX.Element {
  const id = props.title.toLowerCase().replace(' ', '-');

  return (
    <div id={id} className={'block ' + (props.className ?? '')}>
      <h1 className="block__title">{props.title}</h1>
      <MaskedText>{props.subtitle}</MaskedText>
      {props.children}
      {/* <div className="block__background"></div> */}
    </div>
  );
}

export default Block;
