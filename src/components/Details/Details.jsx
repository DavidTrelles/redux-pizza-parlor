import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

function Details() {
  const [name, setName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [cityName, setCityName] = useState("");
  const [zip, setZip] = useState("");
//   const [newCustomer, setNewCustomer] = useState ({});
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch({
      type: 'ADD_CUSTOMER',
      payload: newCustomer
    });
    // newCustomer({});
    setName('');
    setStreetAddress('');
    setCityName('');
    setZip('');
};

    const newCustomer = {name, streetAddress, cityName, zip};

  return (
    <section>
      <h2>Add Customer Details</h2>
      <form onSubmit={handleSubmit} className="add-customer-form">
        <input
          required
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />

        <input
          required
          placeholder="Street Address"
          value={streetAddress}
          onChange={(event) => setStreetAddress(event.target.value)}
        />
        <br />

         <input
          required
          placeholder="City"
          value={cityName}
          onChange={(event) => setCityName(event.target.value)}
        />
        <br />

         <input
          required
          placeholder="Zip"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
        />
        <br />

    <input type="radio" name="delivery"/>
    <label htmlFor="delivery">Delivery</label><br/> 

    <input type="radio" name="pickup"/>
    <label htmlFor="pickup">Pickup</label><br/>  

    <button type="submit">Submit</button>
        <br/>

      </form>
    </section>
  );
}

export default Details;

