import "./styles.css";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFadeIn = (duaration = 1, delay = 0) => {
  if(typeof duaration !== "number" || typeof delay !== "number"){
    return;
  }
  const element = useRef();
  useEffect(() => {
    if(element.current){
      const { current } = element;
      current.style.transition = `opacity ${duaration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  },[]);
  return { ref: element, style: {opacity : 0}};
};

export default function App() {
  const fadeInH1 = useFadeIn(2, 4);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hi</h1>
      <p {...fadeInP}>lalalalala</p>
    </div>
  );
}
