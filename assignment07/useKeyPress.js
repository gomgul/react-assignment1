import { useEffect, useState } from "react";

export function useKeyPress(targetKey) {
  const [pressedKey, setPressedKey] = useState(false);
  const onDown = event => {
    const { key } = event;
    if (key === targetKey) {
      setPressedKey(true);
    }
  };
  const onUp = event => {
    const { key } = event;
    if (key === targetKey) {
      setPressedKey(false);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, []);
  return pressedKey;
}
