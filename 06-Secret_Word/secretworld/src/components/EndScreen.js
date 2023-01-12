import "./EndScreen.css";
const EndScreen = ({ restartGame, score }) => {
  return (
    <div>
      <h1>GameOver</h1>
      <h3>Your Final Score:{score}</h3>
      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
};
export default EndScreen;
