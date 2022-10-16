import React from 'react';
import { useTranslation } from 'react-i18next';
import './scss/Summary.scss';

function Summary(props: { className?: string }): JSX.Element {
  const { t } = useTranslation();
  const text = t('summary').split('\n');
  const elements = text.map((line) => <li key={line}><p>{line}</p></li>);

  return (
    <ul className={"summary" + (props.className ?? '')}>
      {elements}
    </ul>
  );
}

export default Summary;
