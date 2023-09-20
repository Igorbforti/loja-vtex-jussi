import React from 'react';
import './global.css';

import Header from './components/Header';
import Tipbar from './components/Tipbar';
import InfoCard from './components/InfoCard';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Header />
      <Tipbar />
      <InfoCard />
      <Contact />
    </>
  );
}

export default App;
