import React from 'react';
import { LocalItem, ThemeType } from '../../data/constants';
import language from '../../utils/language';
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
  const setTheme = (theme: ThemeType = ThemeType.DARK): void => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(LocalItem.THEME, theme);
  };
  return (
    <li className={props.className}>
      <h2>{language('Theme')}</h2>
      <ToggleSwitch
        text1={language('Dark')}
        text2={language('Light')}
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
