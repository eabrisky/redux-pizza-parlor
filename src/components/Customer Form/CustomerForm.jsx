import { useState } from 'react';

function CustomerForm () {
    const [customerName, setCustomerName] = useState();
    const [streetAddress, setStreetAddress] = useState();
    const [city, setCity] = useState();
    const [zip, setZip] = useState();
    const [type, setType] = useState();



    return (
        <form> 
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
            <input type="radio" id="pickup" value="Pickup" onChange={(event) => setType(event.target.value)} />
            <label for="pickup">Pickup</label>
        </div>
        <div>
            <input type="radio" id="delivery" value="Delivery" onChange={(event) => setType(event.target.value)} />
            <label for="delivery">Delivery</label>
        </div>
        <div>
            <input type="submit" value="Next" />
        </div>


        </form>
    )
}

export default CustomerForm;