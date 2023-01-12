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
  //States
  const [gameStage, setGameStage] = useState(stages[0].name);
  const words = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [attempts, setAttempts] = useState(3);
  const [score, setScore] = useState(0);

  //Pick word and category
  const pickWordAndCategory = useCallback(() => {
    //pick a random category
    const categories = Object.keys(words[0]);
    const category = categories[Math.floor(Math.random() * categories.length)];
    //pick a random word from category
    const word =
      words[0][category][Math.floor(Math.random() * words[0][category].length)];

    return { word, category };
  }, [words]);
  //start the game
  const startGame = useCallback(() => {
    //clear all letters before start the game
    resetAllStates();
    //pick word and category
    const { word, category } = pickWordAndCategory();
    //create a array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    //start game
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  //process letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    //Checked if the letter is already guessed or wrong
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    //push the correct/wrong letter or remove a chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setAttempts((attempt) => attempt - 1);
    }
  };
  const resetAllStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };
  //End game effect
  useEffect(() => {
    if (attempts <= 0) {
      resetAllStates();
      setGameStage(stages[2].name);
    }
  }, [attempts]);
  //Check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    //win condition
    if (
      guessedLetters.length === uniqueLetters.length &&
      gameStage === stages[1].name
    ) {
      //add score
      setScore((score) => score + 100);
      //restart game with a new word
      startGame();
    }
  }, [guessedLetters, letters, gameStage, startGame]);
  //Restart game
  const restartGame = () => {
    setAttempts(3);
    setScore(0);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <GameScreen
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          attempts={attempts}
          score={score}
        />
      )}
      {gameStage === "end" && (
        <EndScreen restartGame={restartGame} score={score} />
      )}
    </div>
  );
}

export default App;
