import { useState } from "react";
import { holes } from "../data.js";

export default function App() {
  const [holeData, setHoleData] = useState(holes);

  return (
    <main>
      <h1>Whack-A-Mole</h1>
      <section className="game-board">
        {holeData.map((hole) => (
          <div key={hole.id} className="hole">
            {hole.hasMole ? "🐹" : ""}
          </div>
        ))}
      </section>
    </main>
  );
}
