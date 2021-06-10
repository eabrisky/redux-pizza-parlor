import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Welcome from '../Welcome/Welcome';
import CustomerForm from '../Customer Form/CustomerForm'
import Checkout from '../Checkout/Checkout';

function App() {

  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
