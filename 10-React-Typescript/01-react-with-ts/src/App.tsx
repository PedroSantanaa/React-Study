import React from "react";
import "./App.css";

function App() {
  //1-VARIAVEIS
  const name: string = "Matheus";
  const age: number = 33;
  const isWorking: boolean = false;

  //2-FUNÇÕES
  const grettings = (name: string): string => {
    return `Olá ${name}`;
  };
  return (
    <div className="App">
      <h1>React com TS</h1>
      <h2>O nome é:{name}</h2>
      <h3>Idade:{age}</h3>
      {isWorking && <p>Trabalhando</p>}
      {!isWorking && <p>Não Trabalhando</p>}
      <h3>{grettings(name)}</h3>
    </div>
  );
}

export default App;
