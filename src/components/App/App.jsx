import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Checkout from '../Checkout/Checkout';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
     <Checkout />
    </div>
  );
}

export default App;
