//Css
import "./App.css";
//Imgs
import City from "./assets/city.jpg";
//Components
import ManageDate from "./components/ManageDate";
import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/ListRender";

function App() {
  return (
    <div className="App">
      <h1>Advanced React</h1>
      {/* Imagem em public */}
      <div>
        <img src="./img1.jpg" alt="paisagem" />
      </div>
      {/* Imagem em src/asset */}
      <div>
        <img src={City} alt="City" />
      </div>
      {/* Components */}
      <ManageDate />
      <ListRender />
      <CondicionalRender />
    </div>
  );
}

export default App;
