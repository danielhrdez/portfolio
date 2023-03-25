import React from 'react';
import './scss/MaskedText.scss';

interface MaskedTextProps {
  children: React.ReactNode;
  className?: string;
}

function MaskedText(props: MaskedTextProps): JSX.Element {
  return (
    <div className={'mask'}>
      {/* <div className='mask__color' /> */}
      <p className="mask__text">{props.children}</p>
    </div>
  );
}

export default MaskedText;
