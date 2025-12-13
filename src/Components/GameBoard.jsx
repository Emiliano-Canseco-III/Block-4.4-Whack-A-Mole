import useGame from "./useGame.jsx";
import Hole from "./Hole.jsx";
import "../Stylesheets/index.css";

export default function GameBoard() {
  const { holes, score, restartGame } = useGame();

  return (
    <section>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: 24,
            marginRight: 24,
            borderRadius: 8,
            border: "2px solid black",
            padding: "4px 12px",
          }}
        >
          Score: {score}
        </div>
        <button
          style={{
            fontSize: 24,
            borderRadius: 8,
            border: "2px solid black",
            padding: "4px 12px",
            textDecoration: "none",
            backgroundColor: "white",
            cursor: "pointer",
          }}
          onClick={restartGame}
        >
          Restart
        </button>
      </header>

      <section
        className="game-board"
        style={{
          display: "grid",
          placeItems: "center",
          alignItems: "center",

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
