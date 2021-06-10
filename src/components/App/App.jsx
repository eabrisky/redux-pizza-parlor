import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Welcome from "../Welcome/Welcome";
import CustomerForm from "../Customer Form/CustomerForm";
import Checkout from "../Checkout/Checkout";
import SelectPizza from "../Select Pizza/SelectPizza";
import {
  Route,
  HashRouter as Router,
  Link,
  useHistory,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>
      <Router>
        <div>
          <nav className="nav-bar">
            <ul>
              <nav>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/customerForm">Customer Information</Link>
                </li>
                <li>
                  <Link to="/checkout">Checkout</Link>
                </li>
              </nav>
              <Route path="/" exact>
                <Welcome />
              </Route>
              <Route path="/cart">
                <SelectPizza />
              </Route>
              <Route path="/customerForm">
                <CustomerForm />
              </Route>
              <Route path="/checkout">
                <Checkout />
              </Route>
            </ul>
          </nav>
        </div>
      </Router>
    </div>
  );
}

export default App;
