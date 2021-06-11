import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Checkout() {

    const dispatch = useDispatch();
    const history = useHistory();
    let totalArray = [];
    let total = 0;

    const customerInfo = useSelector(store => store.customerReducer);
    const pizzaOrder = useSelector(store => store.pizzaReducer);

    // [x] get customer info (useSelector)
    // [x] get pizza order info (array) (useSelector)
    // [x] display in return (populate table)

    const handleCheckout = () => {

        console.log('in handleCheckout');

        for (let i = 0; i < pizzaOrder.price.length; i++) {
            totalArray.push(pizzaOrder.price[i]);
        };

        for (let i = 0; i < totalArray.length;) {
            total += totalArray[i];
        };

        const postData = {
            customerName : customerInfo.name,
            streetAddress : customerInfo.streetAddress,
            city : customerInfo.city,
            zip : customerInfo.zip,
            total : total,
            type : customerInfo.type,
            pizzas : [{
                id : ,
                quantity : ,
            }]
        }

        // send customer info, array of pizzas,
        // and order total to server
        const sendOrder = () => {
            axios.post( '/api/order', postData)
                .then( response => {
                    // clear the appropriate reducers (customer info & pizza order info)
                    // this should clear the table?
                    dispatch({
                        type: 'CLEAR_ORDER',
                    }); // end dispatch
                }) // end .then
                .catch( err => {
                    console.log( err );
                })
        }

        // navigate user back to the select pizza page
        // history.push(route for select pizza)
        history.push('/cart');


    } // end handleCheckout fn

    return (
        <>
            <h2>Step 3: Checkout</h2>
            <p>{customerInfo.customerName}</p>
            <p>{customerInfo.streetAddress}</p>
            <p>{customerInfo.city}</p>
            <p>{customerInfo.zip}</p>
            <p>For {customerInfo.type}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {/* .map(pizza & cost) */}
                    {pizzaOrder.map((pizza, index) => {
                        return (<tr key={index}>
                            <td>{pizza.name}</td>
                            <td>{pizza.price}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <h2>Total: ${total}</h2>
            <button onClick={handleCheckout}>CHECKOUT</button>
        </>
    )
} // end checkout() fn

export default Checkout;