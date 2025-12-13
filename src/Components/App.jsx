import { GameProvider } from "./GameContext.jsx";
import useGame from "./useGame.jsx";
import Welcome from "./Welcome.jsx";
import GameBoard from "./GameBoard.jsx";

function Content() {
  const { isPlaying } = useGame();
  return isPlaying ? <GameBoard /> : <Welcome />;
}

function App() {
  return (
    <GameProvider>
      <div className="App">
        <main style={{ padding: 20 }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: 32,
              marginBottom: 24,
            }}
          >
            Whack-A-Mole
          </h1>
          <Content />
        </main>
      </div>
    </GameProvider>
  );
}

export default App;
