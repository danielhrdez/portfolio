/**
 * @author Daniel Hernández de León
 * @file index.tsx
 * @description This is the main script of the website
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global.scss';
import App from './App';
import main from './main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

main();

/*
import reportWebVitals from './reportWebVitals'
reportWebVitals(console.log)
*/
