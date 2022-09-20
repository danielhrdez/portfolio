/**
 * @author Daniel Hernández de León
 * @file index.tsx
 * @description This is the main script of the website
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/global.scss';
import App from './App';
import { beforeLoad, afterLoad } from './utils/loadevents';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

beforeLoad();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

afterLoad();

/*
import reportWebVitals from './reportWebVitals'
reportWebVitals(console.log)
*/
