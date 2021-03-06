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

const orderReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ORDERS' :
            return action.payload;
        default :
            return state;
    }
} // end orderReducer
// Items in the cart:
const checkoutReducer = (state = [], action) => {
    switch (action.type) {
        case 'CHECKOUT' :
            console.log(action.payload);
            return [...state, action.payload];
        case 'CLEAR_CHECKOUT' :
            const matchPizza = pizza => pizza.id !== action.payload.id;
            return state.filter(matchPizza);
        default :
            return state;
    } // end checkoutReducer
}

const store = createStore(

    combineReducers({
        pizzaReducer, customerReducer, orderReducer, checkoutReducer
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
