import { useState } from "react";
import axios from "axios";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import "./CustomerForm.css"


function CustomerForm () {
  const [customerName, setCustomerName] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [type, setType] = useState();

  const dispatch = useDispatch();
  const history = useHistory();

  // Create object variable to easily send in dispatch
  const newCustomer = {
    customer_name: customerName,
    street_address: streetAddress,
    city: city,
    zip: zip,
    type: type,
  };

  const customerSubmit = (event) => {
    event.preventDefault();

    dispatch({
        type: 'ADD_CUSTOMER',
        payload: newCustomer
    })

    history.push('/checkout');
  }


  return (
    <div>
      <div>
        <h2>Step 2: Customer Information</h2>
      </div>
      <form className="form" onSubmit={customerSubmit}>
          <div>
        <input
          placeholder="Name"
          value={customerName}
          onChange={(event) => setCustomerName(event.target.value)}
        />
        </div>
        <div>
        <input
          placeholder="Street Address"
          value={streetAddress}
          onChange={(event) => setStreetAddress(event.target.value)}
        />
        </div>
        <div>
        <input
          placeholder="City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        </div>
        <div>
        <input
          placeholder="Zip"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
        />
        </div>
        <div>
          <input
            type="radio"
            id="pickup"
            value="Pickup"
            onChange={(event) => setType(event.target.value)}
          />
          <label htmlFor="pickup">Pickup</label>
        </div>
        <div>
          <input
            type="radio"
            id="delivery"
            value="Delivery"
            onChange={(event) => setType(event.target.value)}
          />
          <label htmlFor="delivery">Delivery</label>
        </div>
        <div>
          <input type="submit" value="Next" />
        </div>
      </form>
    </div>
  );
}

export default CustomerForm;
