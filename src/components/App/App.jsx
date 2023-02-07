import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import './App.css';

import Menu from "../Menu/Menu";
import Checkout from "../Checkout/Checkout";
import Details from "../Details/Details";

function App() {

  const [pizzaMenu, setPizzaMenu] = useState([]);

  useEffect( () => {
    fetchPizzaMenu();
  }, [])


  // GET
  const fetchPizzaMenu = () => {
    axios.get(`/api/pizza`)
    .then((response) => {
      console.log('GET Response Data:', response.data);
      setPizzaMenu(response.data);
    }).catch(function(error) {
      console.log('GET Error:', error);
    });
  }

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
    
        {/* <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p> */}
        <Route path="/" exact>
          <Menu pizzaMenu={pizzaMenu} />
        </Route>
        <Route path="/details" >
          <Details />
        </Route>
        <Route path="/checkout" >
          <Checkout />
        </Route>
    
      </div>
    </Router>
  );
}

export default App;
