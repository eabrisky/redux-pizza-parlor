import React from 'react';
import './Welcome.css';
import { Route, HashRouter as Router, Link, useHistory } from 'react-router-dom';

// function for Home/Welcome component
function Welcome() {
    return (
        <div>
            <div className='App'>
                <div>
                    <header className='App-header'>
                        <h1 className='App-title'>Prime Pizza</h1>
                    </header>
                    <nav class="nav-bar">
                        <ul>
                            <nav>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Cart</Link>
                                </li>
                                <li>
                                    <Link to="/">Customer Information</Link>
                                </li>
                                <li>
                                    <Link to="/">Checkout</Link>
                                </li>
                            </nav>
                            <Route path="/">
                                <Welcome />
                            </Route>
                            <Route path="/cart">
                                
                            </Route>
                            <Route path="/">

                            </Route>
                            <Route path="/">

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
    )
}

export default Welcome;