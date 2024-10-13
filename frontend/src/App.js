// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Client';
import Community from './components/community';
import Feature from './components/Feature'
import Stats from './components/Stats'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <Community/>
      <Feature/>
      <Stats/>
      <Blog/>
      <Footer/>
    </div>

  );
}

export default App;
