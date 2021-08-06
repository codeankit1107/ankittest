
import React, { useReducer } from "react";





const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }

  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};




  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image,price, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">

                    
                  <img src={image} alt="images" className="card-media" />

                      <h2 className="card-title"> {name} </h2>
                   
                      <span className="card-price "> Price:  {price}</span>

                 
                  </div>

                  <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
         
          +
        </div>
        <div class="button2 subtle" onClick={() => dispatch({ type: "DECR" })}>
         
          -
        </div>
      </div>


                
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
