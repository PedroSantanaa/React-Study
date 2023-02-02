import React, { createContext } from "react";
import "./App.css";
import Context from "./components/Context";
import Destructuring from "./components/Destructuring";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import States from "./components/States";

//context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);
function App() {
  //1-VARIAVEIS
  const name: string = "Matheus";
  const age: number = 33;
  const isWorking: boolean = false;

  //2-FUNÇÕES
  const grettings = (name: string): string => {
    return `Olá ${name}`;
  };

  //context
  const contextValue: IAppContext = {
    language: "js",
    framework: "Express",
    projects: 5,
  };
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com TS</h1>
        <h2>O nome é:{name}</h2>
        <h3>Idade:{age}</h3>
        {isWorking && <p>Trabalhando</p>}
        {!isWorking && <p>Não Trabalhando</p>}
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Desestruturando"
          content="Para desestruturar devemos abrir chaves"
          commentsQty={4}
          tags={["destreturar", "chaves", "mais facil"]}
        />
        <States />
        <h3>{grettings(name)}</h3>
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
