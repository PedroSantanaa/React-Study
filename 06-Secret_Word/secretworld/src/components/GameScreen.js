import { useState, useRef } from "react";
import "./GameScreen.css";
const GameScreen = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  attempts,
  score,
}) => {
  const [guessedLetter, setGuessedLetter] = useState("");
  const guessedLetterInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(guessedLetter);
    setGuessedLetter("");
    guessedLetterInputRef.current.focus();
  };
  return (
    <div className="game">
      <p className="points">
        <span>Score:{score}</span>
      </p>
      <h1>Guess the Word</h1>
      <h3 className="tip">
        Tip about the word: <span>{pickedCategory}</span>
      </h3>
      <p>You have {attempts} attempts</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Guess a letter:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            onChange={(e) => setGuessedLetter(e.target.value)}
            value={guessedLetter}
            ref={guessedLetterInputRef}
          />
          <button>Guess</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Wrong Letters:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};
export default GameScreen;
