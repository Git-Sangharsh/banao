import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Content from './components/content/Content';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Content />
    </div>
  )
}

export default App