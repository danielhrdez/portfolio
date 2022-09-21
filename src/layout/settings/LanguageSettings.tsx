import React from 'react';
import { LocalItem, Language } from '../../data/constants';
import language from '../../utils/language';
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
  const setLanguage = (language: Language = Language.ENGLISH): void => {
    localStorage.setItem(LocalItem.LANGUAGE, language);
    setTimeout(() => window.location.reload(), 300);
  };
  return (
    <li className={props.className}>
      <h2>{language('Language')}</h2>
      <ToggleSwitch
        text1={language('English')}
        text2={language('Spanish')}
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
 