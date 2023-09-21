import React from 'react';
import './global.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Tipbar from './components/Tipbar';
import Shelf from './components/Shelf';
import InfoCard from './components/InfoCard';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Tipbar />
      <Shelf />
      <InfoCard />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
