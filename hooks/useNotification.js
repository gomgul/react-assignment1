import "./styles.css";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  if(!("Notification" in window)) {
    return;
  }
  const fireNotif = () => { 
    if(Notification.permission !== "granted"){
      Notification.requestPermission().then(permission => {
        if(permission === "granted"){
          new Notification(title, options)
        }else{
          return;
        }
      })
    }else{
      new Notification(title, options);
    }
  };
  return fireNotif;
}


export default function App() {
  const triggerNotif = useNotification("kimchi is great food", {body: "bulgogi"});
  return(
    <div className="App" style={{ height : "1000vh"}}>
      <h1>booya~~~</h1>
      <button onClick={triggerNotif}>kimchi</button>
    </div>
  );
}
