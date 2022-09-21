import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/global.scss';
import App from './App';
import { beforeLoad, afterLoad } from './utils/loadEvents';
// import reportWebVitals from './utils/reportWebVitals'

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

// reportWebVitals(beforeLoad).catch(console.error);
