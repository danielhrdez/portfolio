/**
 * @author Daniel Hernández de León
 * @file Settings.tsx
 * @description This is the main Settings component
 */

import React from 'react';
import { ReactComponent as SettingsExit } from '../assets/settings-exit.svg';
import './Settings.scss';
import { LocalItem, ThemeType } from '../data/constants';
import { enableScroll } from '../utils/scrollFunctions';

/**
 * @desc This is the main Settings component
 * @returns {JSX.Element} The main Settings component
 */
function Settings(): JSX.Element {
  const setTheme = (theme: ThemeType = ThemeType.DARK): void => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(LocalItem.THEME, theme);
  };
  const settingsCollapse = (): void => {
    document.querySelector('.settings')?.classList.remove('show');
    enableScroll();
  };
  return (
    <div className="settings">
      <div className="settings__menu">
        <ul>
          <li>
            <h2>Theme</h2>
            <button
              type="button"
              onClick={() => setTheme(ThemeType.DARK)}>
              Dark
            </button>
            <button
              type="button"
              onClick={() => setTheme(ThemeType.LIGHT)}>
              Light
            </button>
          </li>
          <li>
            <h2>Language</h2>
          </li>
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
