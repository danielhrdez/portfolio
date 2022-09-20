/**
 * @author Daniel Hernández de León
 * @file Title.tsx
 * @description This is the main Title of the page
 */

import React from 'react';
import './Title.scss';
import LanguageJSON from '../../data/language.json';
import getLanguage from '../../utils/getlanguage';

/**
 * @desc This is the Title component
 * @returns {JSX.Element} The Title component
 */
function Title(): JSX.Element {
  return (
    <div className="title">
      <h1>Daniel Hernández de León</h1>
      <h2>{LanguageJSON.Software[getLanguage()]}</h2>
      <div className="title__underline"></div>
    </div>
  );
}

export default Title;
