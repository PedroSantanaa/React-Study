import "./App.css";
import MyForms from "./components/MyForms";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForms user={{ name: "Pedro", email: "pedro.ferraz01@gmail.com" }} />
    </div>
  );
}

export default App;
