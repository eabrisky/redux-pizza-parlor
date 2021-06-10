import React from 'react';
import './Welcome.css';
import { Route, HashRouter as Router, Link, useHistory } from 'react-router-dom';
import SelectPizza from '../Select Pizza/SelectPizza';
import CustomerForm from '../Customer Form/CustomerForm';
import Checkout from '../Checkout/Checkout';

// function for Home/Welcome component
function Welcome() {
    return (
        <Router>
            <div>
                <div className='App'>
                    <div>
                        <header className='App-header'>
                            <h1 className='App-title'>Prime Pizza</h1>
                        </header>
                        <nav class="nav-bar">
                            <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/selectPizza">Cart</Link>
                                    </li>
                                    <li>
                                        <Link to="/customerForm">Customer Information</Link>
                                    </li>
                                    <li>
                                        <Link to="/checkout">Checkout</Link>
                                    </li>
                                {/* <Route path="/" exact>
                                    <Welcome />
                                </Route> */}
                                <Route path="/selectPizza">
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
                    <div>
                        <img src='images/pizza_photo.png' />
                    </div>
                    <div>
                        <button>Start Order</button>
                    </div>
                    <div>
                        <p>Pizza is great.</p>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Welcome;