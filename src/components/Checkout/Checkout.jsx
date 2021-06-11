import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Checkout() {

    const dispatch = useDispatch();
    const history = useHistory();

    const customerInfo = useSelector(store => store.customerReducer);
    const checkoutOrder = useSelector(store => store.checkoutReducer);

    // [x] get customer info (useSelector)
    // [x] get pizza order info (array) (useSelector)
    // [x] display in return (populate table)

    console.log(customerInfo);
    console.log(checkoutOrder);

    const handleCheckout = () => {

        console.log('in handleCheckout');

        

        const postData = {
            customerName : customerInfo[0].customer_name,
            streetAddress : customerInfo[0].street_address,
            city : customerInfo[0].city,
            zip : customerInfo[0].zip,
            total : 0,
            type : customerInfo[0].type,
            pizzas : [{
                id : checkoutOrder[0].id,
                quantity : 1
            }]
        }

        console.log(postData);

        // send customer info, array of pizzas,
        // and order total to server
        const sendOrder = () => {
            axios.post( '/api/order', postData )
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

        sendOrder();

        // navigate user back to the select pizza page
        // history.push(route for select pizza)
        history.push('/cart');


    } // end handleCheckout fn

    return (
        <>
            <h2>Step 3: Checkout</h2>
            {customerInfo.map((customer, i) => {
                return (<><p key={i}>
                    {customer.customer_name}
                    <br />
                    {customer.street_address}
                    <br />
                    {customer.city}
                    <br />
                    {customer.zip}
                </p>
                <p className="deliveryType">{customer.type}</p></>)
            })}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {/* .map(pizza & cost) */}
                    {checkoutOrder.map((pizza, index) => {
                        return (<tr key={index}>
                            <td>{pizza.name}</td>
                            <td>{pizza.price}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <h2>Total: $0</h2>
            <button onClick={handleCheckout}>CHECKOUT</button>
        </>
    )
} // end checkout() fn

export default Checkout;