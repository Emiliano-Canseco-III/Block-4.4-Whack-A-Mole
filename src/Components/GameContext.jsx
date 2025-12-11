import react, { createContext, useContext, useState } from "react";
import { holes as initialHoles } from "../data.js";

function freshHoles() {
  return initialHoles.map((h) => ({ ...h }));
}

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [holes, setHoles] = useState(() => freshHoles());
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Place a mole into a random hole
  function placeRandomMole() {
    const newHoles = freshHoles();
    const randomIndex = Math.floor(Math.random() * newHoles.length);
    newHoles[randomIndex].hasMole = true;
  }
}
