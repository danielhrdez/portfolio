import React from 'react';
import { useTranslation } from 'react-i18next';
import './scss/Description.scss';
import Block from '../../components/Block';

function Description(props: { className?: string }): JSX.Element {
  const { t } = useTranslation();
  const text = t('summary').split('\n');
  const elements = text.map((line) => <li key={line}><p>{line}</p></li>);
  const subtitle = t('software');

  return (
    <Block title="Daniel H." subtitle={subtitle} className={props.className}>
      <ul className={"description__summary"}>
        {elements}
      </ul>
    </Block>
  );
}

export default Description; 
