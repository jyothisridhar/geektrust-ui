import React from 'react';
import './App.css';
import Header from './components/Header';
import Destinations from './components/Destinations';

function App() {

  return(
    <div>
      <Header />
      <div className="heading">
        <h3 className="item1">Select the planets you want to search in:</h3>
      </div>
      <div className="planet-container">
        <Destinations num="1"/>
        <Destinations num="2"/>
        <Destinations num="3"/>
        <Destinations num="4"/>
      </div>
    </div>
  );
}

export default App;
