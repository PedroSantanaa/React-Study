//CSS
import "./App.css";
//React
import { useCallback, useState, useEffect } from "react";
//Data
import { wordsList } from "./data/words";
//Components
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import EndScreen from "./components/EndScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const words = useState(wordsList);

  //start the game
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  //process letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };
  //Restart game
  const restartGame = () => {
    setGameStage(stages[0].name);
  };
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <GameScreen verifyLetter={verifyLetter} />}
      {gameStage === "end" && <EndScreen restartGame={restartGame} />}
    </div>
  );
}

export default App;
