import React from 'react';
import { useTranslation } from 'react-i18next';

function Summary(): JSX.Element {
  const { t } = useTranslation();
  return <h4>{t('Summary')}</h4>;
}

export default Summary;
