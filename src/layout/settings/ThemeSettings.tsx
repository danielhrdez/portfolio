import React from 'react';
import { LocalItem, ThemeType } from '../../data/constants';
import LanguageJSON from '../../data/language.json';
import getLanguage from '../../utils/getLanguage';
import ToggleSwitch from '../../components/ToggleSwitch';

/**
 * @desc This is the ThemeSettings props interface
 * @interface IThemeSettingsProps
 */
interface ILanguageSettingsProps {
  className?: string;
}

/**
* @desc This is the main Settings component
* @returns {JSX.Element} The main Settings component
*/
function ThemeSettings(props: ILanguageSettingsProps): JSX.Element {
  const language = getLanguage();
  const setTheme = (theme: ThemeType = ThemeType.DARK): void => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(LocalItem.THEME, theme);
  };
  return (
    <li className={props.className}>
      <h2>{LanguageJSON.Theme[language]}</h2>
      <ToggleSwitch
        text1={LanguageJSON.Dark[language]}
        text2={LanguageJSON.Light[language]}
        onChange={(checked: boolean) => {
          if (checked) {
            setTheme(ThemeType.LIGHT);
          } else {
            setTheme(ThemeType.DARK);
          }
        }}
        checked={localStorage.getItem(LocalItem.THEME) === ThemeType.LIGHT}
      />
    </li>
  );
}

export default ThemeSettings;
