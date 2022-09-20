/**
 * @author Daniel Hernández de León
 * @file Settings.tsx
 * @description This is the main Settings component
 */

import React from 'react';
import { ReactComponent as SettingsExit } from '../assets/images/settings-exit.svg';
import './Settings.scss';
import { enableScroll } from '../utils/scrollfunctions';
import LanguageSettings from './settings/LanguageSettings';
import ThemeSettings from './settings/ThemeSettings';

/**
 * @desc This is the main Settings component
 * @returns {JSX.Element} The main Settings component
 */
function Settings(): JSX.Element {
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
        <ul>
          <ThemeSettings className="settings__item" />
          <LanguageSettings className="settings__item" />
        </ul>
        <SettingsExit
          className="settings__exit"
          onClick={settingsCollapse}
        />
      </div>
    </div>
  );
}

export default Settings;
