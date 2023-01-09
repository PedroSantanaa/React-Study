import { useState } from "react";
const CondicionalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState("Tiago");
  return (
    <div>
      CondicionalRender
      <h1>Isso será exibido??</h1>
      {x && <p>Se x for verdadeiro, sim</p>}
      {!x && <p>Se x for falso, sim</p>}
      <h1>If ternario</h1>
      {name === "Pedro" ? (
        <div>
          <p>O nome é Pedro</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("Pedro")}>Clique Aqui</button>
    </div>
  );
};
export default CondicionalRender;
