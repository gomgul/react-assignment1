import "./styles.css";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if(element.current){
      element.current.requestFullscreen();
      if(callback && typeof callback === "function"){
        callback(true);
      }
    }
  }
  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen !== null) {
      document.exitFullscreen();
    }
    if(callback && typeof callback === "function"){
      callback(false);
    }
  }
  return {element,triggerFull,exitFull};
}



export default function App() {
  const onFullS = (isFull) => {
    console.log(isFull? "We are full" : "We are small");
  }
  const {element,triggerFull,exitFull } = useFullscreen(onFullS);
  return(
    <div className="App" style={{ height : "1000vh"}}>
      <div ref={element} >
      <img
        src="https://t1.daumcdn.net/cfile/12356D0D4A0E9DC711"/>
        
        </div>
      <button onClick={triggerFull}>Make fullscreen</button>
      <button onClick={exitFull}>Exit fullscreen</button>
    </div>
  );
}
