import React from 'react';

interface IHeaderLinkProps {
  href: string;
  text: string;
  active: boolean;
  onClick: (link: string) => void;
}

export function HeaderLink(props: IHeaderLinkProps): JSX.Element {
  const handleClick = (linkID: string): void => {
    props.onClick(linkID);
  };
  return (
    <a
      className={props.active ? 'header__active' : ''}
      href={props.href}
      onClick={() => handleClick(props.text)}
    >
      {props.text}
    </a>
  );
}

export default HeaderLink;
