import React from 'react';
import { useTranslation } from 'react-i18next';
import './scss/Summary.scss';

function Summary(): JSX.Element {
  const { t } = useTranslation();
  return <h4
    className="summary"
    dangerouslySetInnerHTML={{ __html: t('summary') }}
  />;
}

export default Summary;
