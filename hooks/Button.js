import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";



const Btn = () => {
  const [ item, setItem ] = useState(0);
  const plus = () => setItem( item + 1);
  const minus = () => setItem( item - 1);
  return (
    <div className="Btn">
      <h1>{item} </h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>  
  );

};

export default Btn;