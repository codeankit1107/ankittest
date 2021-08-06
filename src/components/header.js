import React from 'react';
import {Link} from "react-router-dom";


const Header = () =>{
    return(
        <header>
           <h3 style={{color: "white"}}>
               <i class="fas fa-utensils"></i>   <Link style={{color: "white"}} to="/">Food's Restaurant</Link>
               </h3>
        </header>
    )
}
export default Header;