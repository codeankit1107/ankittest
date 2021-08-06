import React,{ useState } from 'react';
import api from '../data/api';
import {Link} from "react-router-dom";

import  { useReducer } from "react";




const reducer = (state, action) => {
    if (action.type === "INCR") {
      state = state + 1;
    }
  
    if (state > 0 && action.type === "DECR") {
      state = state - 1;
    }
    return state;
  };
  
  
  
 




const Products = () =>{
    const [added, setadded] = useState(false);

    const intialData = 0;
  const [state, dispatch] = useReducer(reducer, intialData);

    return(

        <div className="container product-container-main">
            <div className="cart-block">

                
            <Link to="/Checkout"><i style={{color: "black"}} class="fas fa-shopping-cart"></i> </Link>
                         
                
                
                <div className="number">
                <p>{state}</p>
                     
                 </div>
             </div>
            <div className="container product-container">
                {api.map((api,index)=>
                <div className="product-card" key={index}>
                     <img className="img-full" src={api.image}/>
                        <div className="details"> 
                            <h2>{api.name}</h2>
                            <p>{api.price}</p>
                        </div>

             
                            <button className="blue" onClick={() => dispatch({ type: "INCR" })}><span className="plus">+</span></button>
                            <button className={added?"pink":"grey"} onClick={() => dispatch({ type: "DECR" })}><span className="minus">-</span></button>
                      
                </div>
                )}
            </div>
        </div>
        
    )
}
export default Products;