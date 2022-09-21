import React from 'react';

/**
 * @desc This is the HeaderLink Props interface
 * @interface HeaderLinkProps
 */
interface IHeaderLinkProps {
  href: string;
  text: string;
  active: boolean;
  onClick: (link: string) => void;
}

/**
 * @desc This is the HeaderLink component
 * @param {IHeaderLinkProps} props The HeaderLink props
 * @returns {JSX.Element} The HeaderLink component
 */
function HeaderLink(props: IHeaderLinkProps): JSX.Element {
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
