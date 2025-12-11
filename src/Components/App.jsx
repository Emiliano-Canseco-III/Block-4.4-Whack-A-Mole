import { GameProvider, useGame } from "./GameContext.jsx";
import Welcome from "./Welcome.jsx";
import GameBoard from "./GameBoard.jsx";

function Content() {
  const { isPlaying } = useGame();
  return isPlaying ? <GameBoard /> : <Welcome />;
}

export default function App() {
  return (
    <GameProvider>
      <main style={{ padding: 20 }}>
        <h1>Whack-A-Mole</h1>
        <Content />
      </main>
    </GameProvider>
  );
}
