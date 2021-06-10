import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Checkout() {

    dispatch = useDispatch();

    const customerInfo = useSelector(store => store.customerReducer);
    const pizzaOrder = useSelector(store => store.pizzaReducer);

    // [x] get customer info (useSelector)
    // [x] get pizza order info (array) (useSelector)
    // [x] display in return (populate table)

    const handleCheckout = () => {

        console.log('in handleCheckout');
        // history=useHistory();

        // send customer info, array of pizzas,
        // and order total to server


        // navigate user back to the select pizza page
        // history.push(route for select pizza)
        history.push('/cart');

        // clear the appropriate reducers (customer info & pizza order info)
        // this should clear the table?
        dispatch({
            type : 'CLEAR_ORDER'
        }); // end dispatch

    } // end handleCheckout fn

    return (
        <>
            <h2>Step 3: Checkout</h2>
            <p>{customerInfo.customerName}</p>
            <p>{customerInfo.streetAddress}</p>
            <p>{city}</p>
            <p>{zip}</p>
            <p>For {type}</p>
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
                            <td>{pizza.cost}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <h2>Total: ---Sum of all pizzas (put on right side of page)---</h2>
            <button onClick={handleCheckout}>CHECKOUT</button>
        </>
    )
} // end checkout() fn

export default Checkout;