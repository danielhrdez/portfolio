import React from 'react';
import './scss/Title.scss';
import language from '../../utils/language';

/**
 * @desc This is the Title component
 * @returns {JSX.Element} The Title component
 */
function Title(): JSX.Element {
  return (
    <div className="title">
      <h1>Daniel Hernández de León</h1>
      <h3>{language('Software')}</h3>
      <div className="title__underline"></div>
    </div>
  );
}

export default Title;
