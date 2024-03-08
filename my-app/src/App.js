import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Analytics from './components/Analytics.js';
import Newsletter from './components/Newsletter.js';
import Cards from './components/Cards.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
