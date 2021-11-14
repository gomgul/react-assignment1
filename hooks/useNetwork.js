import "./styles.css";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";


const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if(typeof onChange === "function"){
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }
  },[]);
  return status;
}


export default function App() {
  const handleNetworkChange = (online) => {
    console.log(online? "We just went online": "We are offline");
  }
  const onLine = useNetwork(handleNetworkChange);
  return(
    <div className="App">
      <h1>booya~!</h1>
      <h2>{onLine? "Online" : "Offline" }</h2>
    </div>
  );
}
