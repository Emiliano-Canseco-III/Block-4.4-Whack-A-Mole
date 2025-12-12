import useGame from "./useGame.jsx";

export default function Hole({ hole }) {
  const { whack } = useGame();

  function handleClick() {
    // Only whack if the mole is present
    if (hole.hasMole) {
      whack(hole.id);
    }
  }

  return (
    <div
      role="button"
      aria-pressed={hole.hasMole}
      className={`hole ${hole.hasMole ? "mole" : ""}`}
      onClick={handleClick}
      style={{
        height: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: hole.hasMole ? "pointer" : "default",
      }}
    >
      {/* visual fallback without the CSS background */}
      {hole.hasMole ? "🐹" : ""}
    </div>
  );
}
