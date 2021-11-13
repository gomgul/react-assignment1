import React from "react";
import ReactDOM from "react-dom";
import { useDeviceOrientation } from "./useDeviceOrientation";
import { useFavicon } from "./useFavicon";
import { useGeolocation } from "./useGeolocation";
import { useKeyPress } from "./useKeyPress";
import { useLocalStorage } from "./useLocalStorage";
import { useMousePosition } from "./useMousePosition";
import { useOnline } from "./useOnline";
import { useLockScroll } from "./useLockScroll";

function App() {
  const { alpha, beta, gamma } = useDeviceOrientation();
  const setFavicon = useFavicon("http://initialFavicon.com");
  const {
    coords: { lat, long },
    error: geoError
  } = useGeolocation();
  const kPressed = useKeyPress("k");
  const iPressed = useKeyPress("i");
  const mPressed = useKeyPress("m");
  const cPressed = useKeyPress("c");
  const hPressed = useKeyPress("h");
  const [currentJwt, setJwt] = useLocalStorage("JWT", "null");
  const { x, y } = useMousePosition();
  const isOnLine = useOnline();
  const [isLocked, { lockScroll, unlockScroll }] = useLockScroll();
  return (
    <div className="App">
      <h1>Superhooks!</h1>
      <h3>useDeviceOrientation</h3>
      <ul>
        <li>Alpha: {alpha}</li>
        <li>Beta: {beta}</li>
        <li>Gamma: {gamma}</li>
      </ul>
      <h3>useFavicon</h3>
      <button
        onClick={() =>
          setFavicon(
            "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico?_nc_x=2pvBeySk9lk"
          )
        }
      >
        Change Favicon
      </button>
      <h3>useGeolocation</h3>
      <ul>
        <li>Latitude: {lat}</li>
        <li>Longitude: {long}</li>
        <li>Geolocation Error: {geoError || "null"}</li>
      </ul>
      <h3>useKeyPress</h3>
      <ul>
        <li>Pressed 'k': {kPressed && "K"} </li>
        <li>Pressed 'i': {iPressed && "I"} </li>
        <li>Pressed 'm': {mPressed && "M"}</li>
        <li>Pressed 'c': {cPressed && "C"}</li>
        <li>Pressed 'h': {hPressed && "H"}</li>
        <li>Pressed 'i': {iPressed && "I"}</li>
      </ul>
      <h3>useLocalStorage</h3>
      <ul>
        <li>Current Value: {currentJwt}</li>
        <button onClick={() => setJwt("12345")}>Set value: 12345</button>
        <button onClick={() => setJwt(null)}>Clear LS</button>
      </ul>
      <h3>useMousePosition</h3>
      <ul>
        <li>Mouse X: {x} </li>
        <li>Mouse Y: {y} </li>
      </ul>
      <h3>useOnline</h3>
      <span>Are we online? {isOnLine ? "Yes" : "No"}</span>
      <h3>useLockScroll</h3>
      <h4>Is locked? {isLocked ? "Yes" : "No"} </h4>
      <button onClick={lockScroll}>Lock scroll</button>{" "}
      <button onClick={unlockScroll}>Unlock Scroll</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
