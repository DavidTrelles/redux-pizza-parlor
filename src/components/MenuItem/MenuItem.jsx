import { useDispatch } from "react-redux";
import React, {useState} from 'react';

function MenuItem({pizza}){

    const dispatch = useDispatch();

    const addPizza = () => {
        dispatch({
            type: 'ADD_PIZZA',
            payload: pizza
        });
        dispatch({
            type: 'ADD_TO_TOTAL',
            payload: Number(pizza.price)
        })
        console.log('price for', pizza.name, 'is', pizza.price);
        toggleCart();
    }

    const removePizza = () => {
        console.log('REMOVE');
        toggleCart();
    }

    const [inCart, setInCart] = useState(false);

    const toggleCart = () => {
        setInCart(!inCart);
    }


    return(
        <div className="menuBox">
            <h3>{pizza.name}</h3>
            <div className="photoBox">
                <img className="photo" key={pizza.id} src={pizza.image_path} ></img>
            </div>
            <div className="description">
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
            </div>
            {/* <button onClick={addPizza}>ADD TO CART</button> */}
            {inCart ?
           <button onClick={removePizza}>REMOVE FROM CART</button>:
           <button onClick={addPizza}>ADD TO CART</button>}
    
        </div>
    )
}

export default MenuItem;