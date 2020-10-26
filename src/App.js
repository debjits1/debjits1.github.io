import React from 'react';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import SplashScreen from './components/SplashScreen/SplashScreen';


function App() {
  return (
    <div className="App">
      <SplashScreen></SplashScreen>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Contact></Contact>
    </div>
  );
}

export default App;
