/**
 * @author Daniel Hernández de León
 * @file Settings.tsx
 * @description This is the main Settings component
 */

import React from 'react';
import { ReactComponent as SettingsExit } from '../assets/settings-exit.svg';
import './Settings.scss';

/**
 * @desc This is the main Settings component
 * @returns {JSX.Element} The main Settings component
 */
function Settings(): JSX.Element {
  return (
    <div id="settings">
      <div id="settings-menu">
        <ul>
          <li>
            <h2>Theme</h2>
          </li>
          <li>
            <h2>Language</h2>
          </li>
        </ul>
        <SettingsExit />
      </div>
    </div>
  );
}

export default Settings;
