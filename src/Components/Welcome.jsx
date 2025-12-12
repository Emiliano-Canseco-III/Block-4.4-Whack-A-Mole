import { useGame } from "./useGame.jsx";

export default function Welcome() {
  const { startGame } = useGame();

  return (
    <section className="Welcome">
      <h2>Welcome to Whack-A-Mole!</h2>
      <p>Click Play to start. Whack the mole to score points!</p>
      <button onClick={startGame}>Play</button>
    </section>
  );
}
