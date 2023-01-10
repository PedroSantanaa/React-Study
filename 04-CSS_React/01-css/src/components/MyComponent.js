import "./MyComponent.css";
const MyComponent = () => {
  return (
    <div>
      <h1>CSS com componente</h1>
      <p>Esse é o paragrafo do componente</p>
      <p className="comp-css">
        Esse é o paragrafo do componente tambem mas com uma classe
      </p>
    </div>
  );
};
export default MyComponent;
