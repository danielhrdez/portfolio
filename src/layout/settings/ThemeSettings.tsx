import React from 'react';
import { LocalItem, ThemeType } from '../../data/constants';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const setTheme = (theme: ThemeType = ThemeType.DARK): void => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(LocalItem.THEME, theme);
  };
  return (
    <li className={props.className}>
      <h2>{t('Theme')}</h2>
      <ToggleSwitch
        text1={t('Dark')}
        text2={t('Light')}
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
