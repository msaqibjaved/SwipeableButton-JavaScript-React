import logo from './logo.svg';
import './App.css';
import SwipeableButton from './SwipeableButton/SwipeableButton'

import React from 'react';
import './App.css';
const containerWidthValue = 500; 
const sliderWidthValue = 100; 

function App() {
  return (
    <div className="App">
        <div className='container'>
            <div className='block'>
            <SwipeableButton containerWidth={containerWidthValue} sliderWidth={sliderWidthValue} />
            </div>
        </div>
    </div>
  );
}


export default App;
