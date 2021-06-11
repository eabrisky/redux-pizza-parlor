import { useState } from "react";
import axios from "axios";

function CustomerForm() {
  const [customerName, setCustomerName] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [type, setType] = useState();

  // Create object variable to easily send in POST request
  const newCustomer = {
    customer_name: customerName,
    street_address: streetAddress,
    city: city,
    zip: zip,
    total: 0,
    type: type,
    pizzas: [],
  };

  const customerSubmit = (event) => {
    event.preventDefault();

    //axios POST request to add customer to database
    axios
      .post("/api/order", newCustomer)
      .then((response) => {
        setCustomerName("");
        setStreetAddress("");
        setCity("");
        setZip("");
        setType("");

        //TODO do we need to refresh anything? Customer list on Admin side?
      })
      .catch((err) => {
        console.log("Error while posting new customer", err);
      });
  };

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
