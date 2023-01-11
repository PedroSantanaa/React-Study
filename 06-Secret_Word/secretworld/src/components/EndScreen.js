import "./EndScreen.css";
const EndScreen = ({ restartGame }) => {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
};
export default EndScreen;
