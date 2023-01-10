import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;
  const redTitle = true;
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS com componente */}
      <MyComponent />
      <p>Paragrafo do Global</p>
      {/* CSS INLINE */}
      <p
        style={{
          color: "blue",
          padding: "25px",
          borderTop: "2px solid black",
          fontSize: "25px",
        }}
      >
        Estilizado inline
      </p>
      {/* CSS INLINE dinamico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        Inline dinamico/condicional
      </h2>
      {/* Classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo terá classe dinamica
      </h2>
      {/* CSS Modules */}
      <Title />
      <h2 className="my_title">Teste</h2>
    </div>
  );
}

export default App;
