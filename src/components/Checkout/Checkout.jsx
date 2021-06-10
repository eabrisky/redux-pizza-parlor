import React from 'react';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

function Checkout() {

    // const order = useSelector(store => store.order);

    // get customer info (useSelector)
    // get pizza order info (array) (useSelector)
    // display in return (populate table)

    const handleCheckout = () => {

        console.log('in handleCheckout');
        // history=useHistory();

        // send customer info, array of pizzas,
        // and order total to server

        // navigate user back to the select pizza page
        // history.push(route for select pizza)

        // clear the appropriate reducers (customer info & pizza order info)
        // this should clear the table?

    } // end handleCheckout fn

    return (
        <>
            <h2>Step 3: Checkout</h2>
            <p>---Customer Info---</p>
            <p>---Pickup or Delivery (put on right side of page)---</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {/* .map(pizza & cost) */}
                    <td>
                        {/* Pizza Name */}
                    </td>
                    <td>
                        {/* Cost */}
                    </td>
                </tbody>
            </table>
            <h2>Total: ---Sum of all pizzas (put on right side of page)---</h2>
            <button onClick={handleCheckout}>CHECKOUT</button>
        </>
    )
} // end checkout() fn

export default Checkout;