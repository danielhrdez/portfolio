import React from 'react';
import './scss/Block.scss';
import LineAnimation from './LineAnimation';

interface BlockProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

function Block(props: BlockProps): JSX.Element {
  const id = props.title.toLowerCase().replace(' ', '-');
  const subtitle = props.subtitle ?? '';

  return (
    <div id={id} className={"block " + (props.className ?? '')}>
      <h1 className='block__title'>
        {props.title}
      </h1>
      {subtitle ?? <h2>{subtitle}</h2>}
      <LineAnimation />
      {props.children}
      <div className="block__background"></div>
    </div>
  );
}

export default Block;
