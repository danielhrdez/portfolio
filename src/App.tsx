/**
 * @author Daniel Hernández de León
 * @file App.tsx
 * @description This is the main App component
 */

import React from 'react';
import Settings from './layout/Settings';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';

/**
 * @desc This is the main App component
 * @returns {JSX.Element} The main App component
 */
function App(): JSX.Element {
  return (
    <>
      <Settings />
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
