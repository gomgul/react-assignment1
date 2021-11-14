import "./styles.css";
import { useState, useEffect, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  if(typeof onBefore !== "function"){
    return;
  }
  const handle = (event) => {
    console.log(event);
    const { clientY } = event;
    if(clientY <= 0){
      onBefore();
    }
  };
  useEffect(()=> {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  },[]);
}

export default function App() {
  const begForLife = () => console.log("plz dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hi</h1>

    </div>
  );
}
