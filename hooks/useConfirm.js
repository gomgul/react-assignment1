import "./styles.css";
import { useState, useEffect, useRef } from "react";


const useConfirm = (message = "", onConfirm, onCancel) => {
  if(onConfirm && typeof onConfirm !== "function"){
    return;
  }
  if(onCancel && typeof onCancel !== "function"){
    return;
  }
  const confirmAction = () => {
    if(confirm(message)){
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
}


export default function App() {
  const deleteWorld = () => console.log("Delete");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld,abort);
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
