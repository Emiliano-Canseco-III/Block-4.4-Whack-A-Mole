import useGame from "./useGame.jsx";
import Hole from "./Hole.jsx";

export default function GameBoard() {
  const { holes, score, restartGame } = useGame();

  return (
    <section>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>Score: {score}</div>
        <button onClick={restartGame}>Restart</button>
      </header>

      <section
        className="game-board"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          marginTop: 12,
        }}
      >
        {holes.map((hole) => (
          <Hole key={hole.id} hole={hole} />
        ))}
      </section>
    </section>
  );
}
