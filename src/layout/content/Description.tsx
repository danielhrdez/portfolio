import React from 'react';
import { useTranslation } from 'react-i18next';
import './scss/Description.scss';
import Block from '../../components/Block';

function Description(props: { className?: string }): JSX.Element {
  const { t } = useTranslation();
  const text1 = t('summary_1');
  const text2 = t('summary_2');
  // const elements = text1.map((line) => <li key={line}><p>{line}</p></li>);
  const elements = [text1, text2].map((line) => (
    <li key={line}>
      <p>{line}</p>
    </li>
  ));
  const subtitle = t('software');

  return (
    <Block
      title="Daniel Hernández de León"
      subtitle={subtitle}
      className={props.className}
    >
      <ul className={'description__summary'}>{elements}</ul>
    </Block>
  );
}

export default Description;
