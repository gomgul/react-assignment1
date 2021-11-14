import "./styles.css";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";


const useScroll = () => {
  const [ state, setState ] = useState({
    x : 0,
    y : 0
  });
  const onScroll = () => {
    setState({y : window.scrollY, x: window.scrollX});
  }
  useEffect(()=> {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[])
  return state;
}


export default function App() {
  const {y} = useScroll();
  return(
    <div className="App" style={{ height : "1000vh"}}>
      <h1 style={{position : "fixed", color : y > 100? "red" : "green"}}>booya~!</h1>

    </div>
  );
}
