import React from "react";
import "./Welcome.css";
import { useHistory } from 'react-router-dom';

// function for Home/Welcome component
function Welcome() {
  // browser history
  const history = useHistory();

  // click to take us to cart menu
  const handleClick = () => {
    // onClick change to cart menu
    history.push('/cart');
  }


  return (
    <>
      <div>
        <img src="images/pizza_photo.png" />
      </div>
      <div>
        <button onClick={handleClick}>Start Order</button>
      </div>
      <div>
        <p>Pizza is great.</p>
      </div>
    </>
  );
}

export default Welcome;
