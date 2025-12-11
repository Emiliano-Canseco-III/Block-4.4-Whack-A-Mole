import { createContext, useState } from "react";
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
    setHoles(newHoles);
  }

  function startGame() {
    setScore(0);
    setIsPlaying(true);
    placeRandomMole();
  }

  // Restart means go back to welcome screen; Keep score reset on next start.
  function restartGame() {
    setIsPlaying(false);
    setScore(0);
    setHoles(freshHoles());
  }

  // Called when a mole is clicked
  function whack() {
    // Increment score
    setScore((s) => s + 1);

    // Move mole to a new random hole.
    // Use new array to avoid mutating state.
    setHoles((prev) => {
      // Choose a random index
      const len = prev.length;
      let nextIndex = Math.floor(Math.random() * len);

      // Return brand new array with hasMole true only at nextIndex.
      return prev.map((h, i) => ({ ...h, hasMole: i === nextIndex }));
    });
  }

  return (
    <GameContext.Provider
      value={{ holes, score, isPlaying, startGame, restartGame, whack }}
    >
      {children}
    </GameContext.Provider>
  );
}
