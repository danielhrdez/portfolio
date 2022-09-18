/**
 * @author Daniel Hernández de León
 * @file App.tsx
 * @description This is the main App component
 */

import React from 'react';
// import Settings from './components/Settings';
import Header from './components/Header';
// import Content from './components/Content';
// import Footer from './components/Footer';

/**
 * @desc This is the main App component
 * @returns {JSX.Element} The main App component
 */
function App(): JSX.Element {
  return (
    <div>
      {/* <Settings /> */}
      <Header />
      {/* <Content /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
