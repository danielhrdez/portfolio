import React from 'react';
import { ReactComponent as SettingsExit } from '../assets/images/settings-exit.svg';
import './scss/Settings.scss';
import { enableScroll } from '../utils/scrollFunctions';
import LanguageSettings from './settings/LanguageSettings';
import ThemeSettings from './settings/ThemeSettings';
import { useTranslation } from 'react-i18next';

/**
 * @desc This is the main Settings component
 * @returns {JSX.Element} The main Settings component
 */
function Settings(): JSX.Element {
  const { t } = useTranslation();
  const settingsCollapse = (): void => {
    const settings = document.querySelector('.settings');
    settings?.classList.add('hiding');
    settings?.classList.remove('show');
    setTimeout(() => {
      settings?.classList.remove('hiding');
      enableScroll();
    }, 500);
  };
  return (
    <div className="settings">
      <div className="settings__menu">
        <h1>{t('settings')}</h1>
        <ul>
          <ThemeSettings className="settings__item" />
          <LanguageSettings className="settings__item" />
        </ul>
        <SettingsExit className="settings__exit" onClick={settingsCollapse} />
      </div>
    </div>
  );
}

export default Settings;
