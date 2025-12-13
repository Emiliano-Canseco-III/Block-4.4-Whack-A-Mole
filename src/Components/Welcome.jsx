import useGame from "./useGame.jsx";

export default function Welcome() {
  const { startGame } = useGame();

  return (
    <section className="Welcome">
      <h2
        style={{
          textAlign: "center",
          fontSize: 28,
          marginBottom: 12,
        }}
      >
        Welcome to Whack-A-Mole!
      </h2>
      <p
        style={{
          textAlign: "center",
        }}
      >
        Click Play to start. Whack the mole to score points!
      </p>
      <button
        style={{
          display: "flex",
          margin: "auto",
          fontSize: 24,
          borderRadius: 8,
          border: "2px solid black",
          padding: "4px 12px",
          textDecoration: "none",
          backgroundColor: "white",
          cursor: "pointer",

          justifyContent: "center",
          align: "center",
          width: "fit-content",
        }}
        onClick={startGame}
      >
        Play
      </button>
    </section>
  );
}
