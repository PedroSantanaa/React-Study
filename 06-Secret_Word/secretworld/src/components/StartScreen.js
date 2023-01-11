import "./StartScreen.css";
const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};
export default StartScreen;
