import React from 'react';
import './scss/Title.scss';
import { useTranslation } from 'react-i18next';

/**
 * @desc This is the Title component
 * @returns {JSX.Element} The Title component
 */
function Title(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="title">
      <h1>Daniel Hernández de León</h1>
      <h3>{t('software')}</h3>
      <div className="title__underline"></div>
    </div>
  );
}

export default Title;
