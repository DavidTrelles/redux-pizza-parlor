import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

function Checkout(){

    const dispatch = useDispatch();
    const history = useHistory();

    const cart = useSelector(store => store.cartR);
    const details = useSelector(store => store.detailsR);
    const total = useSelector(store => store.totalR);

    const order = {
        customer_name: details.name,
        street_address: details.streetAddress,
        city: details.cityName,
        zip: details.zip,
        type: details.type,
        total: total,
        pizzas: cart
    };
    
    const handleClick = (event) => {
    event.preventDefault();
    axios.post('/api/order', order)
    .then((response) => {
        console.log("successful post", response);
        history.push("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
    }

    console.log('ORDER:', order);

    return (
        <>
        <h1>Your Order</h1>
        <h2>Your Cart:</h2>
        <ul>
        {cart.map(pizza => (
            <li key={pizza.id}> <p>{pizza.name}</p></li>
        ))}
        </ul>


        <h2>Your Personal Details: </h2>
        <p>Name: {details.name}</p>
        <p>Address: {details.streetAddress}</p>
        <p>Order Type: {details.type}</p>
        <h2>Your Total: {total}</h2>
        <button onClick={handleClick}>Submit</button>
        </>
    );
}

export default Checkout;