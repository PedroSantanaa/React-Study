// import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
// import CounterContext from "../context/CounterContext";

//4-refatorando um hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";
const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  const { color, dispatch } = useTitleColorContext();

  //6-Alterando context complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };
  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador:{counter}</p>
      {/* 3-Alterando valor do context */}
      <ChangeCounter />
      {/* 6-Alterando context complexo */}
      <div>
        <button
          onClick={() => {
            setTitleColor("RED");
          }}
        >
          Vermelho
        </button>
        <button
          onClick={() => {
            setTitleColor("BLUE");
          }}
        >
          Azul
        </button>
      </div>
    </div>
  );
};
export default Home;
