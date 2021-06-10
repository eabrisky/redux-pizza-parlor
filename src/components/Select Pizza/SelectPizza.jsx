import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'

function SelectPizza () {
    
    //create a variable for dispatch to use
    const dispatch = useDispatch();
    
    //need to bring in the pizzaReducer from the store to display on DOM
    const pizzaPies = useSelector(store => store.pizzaReducer)

    useEffect(() => {
        console.log('In useEffect');
        getPizza();
    }, []);

    // create a function to GET pizzas from database 
    // then send them to redux to store
    const getPizza = () => {
        axios.get('/api/pizza')
        .then( response => {
        dispatch({
            type: 'GET_PIZZA',
            payload: response.data
            })
        }).catch( err => {
            console.log('There was an error in the GET route', err);
        });
    }

    
    
    return (
        <>
            <h2>Select Your Pizza</h2>
            <div>
                {pizzaPies.map( (pizza, index) => 
                
                (<>
                <img key={index} src={pizza.image_path}/>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <p>{pizza.price}
                <button>Add to Cart</button>
                <button>Remove from Cart</button>
                </p>
                </>
                )

                )}
            </div>
        </>
    )



}


export default SelectPizza;