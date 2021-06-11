import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import './Admin.css';

// function to admin page
function Admin() {
    // get the customer orders
    const orderList = useSelector(store => store.orderReducer);

    // use dispatch for GET
    const dispatch = useDispatch();

    const customerOrder = () => {
        // axios to get orders from data base
        // send to index for redux
        axios.get('/api/order')
        .then( (response => {
            // console log response
            console.log('Response from GET:', response);
            // dispatch to redux
            dispatch({
                type : 'GET_ORDERS',
                payload : response.data
            })
        }))
        .catch( (error) => {
            alert('Error getting orders', error)
        });
    }

    return (
        <div>
            <h2>Admin</h2>
            <table className="center">
                <thead>
                <tr className="tr-border">
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
                </thead>
                <tbody>
                    {orderList.map( (orders, index) => {
                        return(
                            <>
                                <tr className="tr-import" key={index}>
                                    <td>{orders.customer_name}</td>
                                    <td>{orders.time}</td>
                                    <td>{orders.type}</td>
                                    <td>{orders.total}</td>
                                </tr>
                            </>
                            );
                            
                        })}
                </tbody>
            </table>
            <button onClick={() => customerOrder()}>Get Orders</button>
        </div>
    )
} // end Admin

export default Admin;