const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Evento ativado");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando o verdadeiro</h1>;
    } else {
      return <h1>Renderizando o falso</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Clique inline")}>
          Clique aki tambem
        </button>
      </div>
      <div>
        {renderSomething(true)}
        {renderSomething(false)}
      </div>
    </div>
  );
};
export default Events;
