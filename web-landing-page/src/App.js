import React from 'react';

//local components
import Timer from './components/timer/timer';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';
import Instructions from './components/instructions/instructions';
import Demonstrations from './components/demonstration/demonstration';
import Reviews from './components/reviews/reviews';
import About from './components/about/about';
import FloatButton from './components/floatButton/floatButton';


function App() {
  return (
    <div className="App">
        <Timer />
        <NavBar />
        <Home />
        <Portfolio />
        <Instructions />
        <Demonstrations />
        <Reviews />
        <About />

        <FloatButton />
    </div>
  );
}

export default App;
