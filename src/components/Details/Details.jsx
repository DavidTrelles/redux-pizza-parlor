import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

function Details({ fetchBookList }) {
  const [name, setName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [cityName, setCityName] = useState("");
  const [zip, setZip] = useState("");
  const [newCustomer, setNewCustomer] = useState ({});
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_CUSTOMER',
      payload: newCustomer
    });
    setNewCustomer("");
    };

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

        <input
          required
          placeholder="Street Address"
          value={streetAddress}
          onChange={(event) => setStreetAddress(event.target.value)}
        />

         <input
          required
          placeholder="City"
          value={cityName}
          onChange={(event) => setCityName(event.target.value)}
        />

         <input
          required
          placeholder="Zip"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Details;

