import React from 'react';
import './scss/Block.scss';

interface BlockProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

function Block(props: BlockProps): JSX.Element {
  const firstLetter = props.id[0].toUpperCase();
  return (
    <div id={props.id} className={"block " + (props.className ?? '')}>
      <h1>
        <div className="first-letter">{firstLetter}</div>
        {props.id.slice(1)}
      </h1>
      {props.children}
      <div className="block__background"></div>
    </div>
  );
}

export default Block;
