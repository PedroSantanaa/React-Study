const Challenge = () => {
  const a = 2;
  const b = 5;
  const handleAdd = () => {
    const soma = a + b;
    console.log(soma);
  };
  return (
    <div>
      <h2>
        Temos dois valores: {a} e {b}
      </h2>
      <button onClick={handleAdd}>Realizar soma</button>
    </div>
  );
};
export default Challenge;
