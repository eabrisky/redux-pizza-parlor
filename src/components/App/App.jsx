import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Welcome from '../Welcome/Welcome';
import CustomerForm from '../Customer Form/CustomerForm'
import Checkout from '../Checkout/Checkout';

function App() {

  return (
    <Welcome />
    // <div>
    //   <div>
    //     <Welcome />
    //   </div>
    //   <div className='App'>
    //     <header className='App-header'>
    //       <h1 className='App-title'>Prime Pizza</h1>
    //   </header>
    //     <img src='images/pizza_photo.png' />
    //   <p>Pizza is great.</p>
    //   </div>
    //   <div>
    //     <CustomerForm />
    //   <Checkout />
    //   </div>
    // </div>
    
  );
}

export default App;
