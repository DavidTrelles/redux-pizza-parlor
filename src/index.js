import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";


// REDUCERS
// cart
const cartR = (state = [], action) => {
    if(action.type === 'ADD_PIZZA'){
        return [...state, action.payload];
    }
    return state;
}

// running total
const totalR = (state=0, action)=>{
if (action.type === "ADD_TO_TOTAL"){
    return state += action.payload;
}else if(action.type==="SUBTRACT_FROM_TOTAL"){
    return state -1
}return state;
}

const detailsR = (state = {}, action) => {
    // gets cust details
  if (action.type === "ADD_CUSTOMER") {
    // let newArray = [...state, action.payload];
    console.log("action inside detailsR", action.payload);
    return action.payload;
  }
    return state;
}

// STORE
const storeInstance = createStore(
    combineReducers({
      cartR,
      totalR,
      detailsR,
    }),
    // reducers,
    applyMiddleware(logger)
  );


// PROVIDERS
ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

