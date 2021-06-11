import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './SelectPizza.css';

function SelectPizza() {

    //create a variable for dispatch to use
    const dispatch = useDispatch();

    //need to bring in the pizzaReducer from the store to display on DOM
    const pizzaPies = useSelector(store => store.pizzaReducer);

    const checkoutReducer = useSelector(store => store.checkoutReducer)

    useEffect(() => {
        console.log('In useEffect');
        getPizza();
    }, []);

    // create a function to GET pizzas from database 
    // then send them to redux to store
    const getPizza = () => {
        axios.get('/api/pizza')
            .then(response => {
                dispatch({
                    type: 'GET_PIZZA',
                    payload: response.data
                })
            }).catch(err => {
                console.log('There was an error in the GET route', err);
            });
    }

    // let orderTotal = 0;
    //     const total = () => {
    //         for (let i = 0; i < checkoutOrder.length; i++) {
    //             orderTotal += Number(checkoutOrder[i].price);
    //         }
    //         return orderTotal;
    //     }
    //     total();

    // need to create a function that will add pizza to an order
    const addPizza = (pizza) => {
        // console.log('add pizza clicker working');
        console.log(pizza);
        dispatch({
            type: 'CHECKOUT',
            payload: pizza
        });
    }

    // need to create a function that will delete pizza from order
    const deletePizza = (pizza) => {
        console.log(pizza);
        dispatch({
            type: 'CLEAR_CHECKOUT',
            payload: pizza
        })

    }
    
    
    return (
        <div className="parentDisplay">
            <h2>Select Your Pizza</h2>
            <div>
                {pizzaPies.map((pizza, index) =>

                (<div className="childDisplay">
                <img key={index} src={pizza.image_path}/>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <p> $ {pizza.price}
                <button onClick={ () => addPizza(pizza)}>Add to Cart</button>
                <button onClick={ () => deletePizza(pizza)}>Remove from Cart</button>
                </p>
                </div>
                )

                )}
            </div>
        </div>
    )



}


export default SelectPizza;