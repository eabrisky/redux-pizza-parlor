import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pizzaReducer = (state = [], action) => {
    if (action.type === 'GET_PIZZA') {
        return action.payload;
    }
    return state;
} // end pizzaReducer

const customerReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER' :
            return [...state, action.payload];
        default :
            return state;
    }
} // end customerReducer

const store = createStore(

    combineReducers({
        pizzaReducer, customerReducer
    }),
    applyMiddleware(
        logger
    )

); // end createStore

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root')
);
