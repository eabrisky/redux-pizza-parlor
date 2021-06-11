import { useState } from "react";
import axios from "axios";
import {useDispatch} from 'react-redux';

function CustomerForm() {
  const [customerName, setCustomerName] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [type, setType] = useState();

  const dispatch = useDispatch();

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

}

  return (
    <div>
      <div>
        <h2>Step 2: Customer Information</h2>
      </div>
      <form onSubmit={customerSubmit}>
        <input
          placeholder="Name"
          value={customerName}
          onChange={(event) => setCustomerName(event.target.value)}
        />
        <input
          placeholder="Street Address"
          value={streetAddress}
          onChange={(event) => setStreetAddress(event.target.value)}
        />
        <input
          placeholder="City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <input
          placeholder="Zip"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
        />
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
