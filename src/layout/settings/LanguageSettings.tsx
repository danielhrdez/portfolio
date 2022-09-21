import React from 'react';
import { LocalItem, Language } from '../../data/constants';
import LanguageJSON from '../../data/language.json';
import getLanguage from '../../utils/getLanguage';
import ToggleSwitch from '../../components/ToggleSwitch';

/**
 * @desc This is the LanguageSettings props interface
 * @interface ILanguageSettingsProps
 */
interface ILanguageSettingsProps {
  className?: string;
}

/**
 * @desc This is the main Settings component
 * @param {ILanguageSettingsProps} props The Settings props
 * @returns {JSX.Element} The main Settings component
 */
function LanguageSettings(props: ILanguageSettingsProps): JSX.Element {
  const language = getLanguage();
  const setLanguage = (language: Language = Language.ENGLISH): void => {
    localStorage.setItem(LocalItem.LANGUAGE, language);
    setTimeout(() => window.location.reload(), 300);
  };
  return (
    <li className={props.className}>
      <h2>{LanguageJSON.Language[language]}</h2>
      <ToggleSwitch
        text1={LanguageJSON.English[language]}
        text2={LanguageJSON.Spanish[language]}
        onChange={(checked: boolean) => {
          if (checked) {
            setLanguage(Language.SPANISH);
          } else {
            setLanguage(Language.ENGLISH);
          }
        }}
        checked={localStorage.getItem(LocalItem.LANGUAGE) === Language.SPANISH}
      />
    </li>
  );
}

export default LanguageSettings;
 