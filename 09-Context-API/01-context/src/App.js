import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
//Components
import NavBar from "./components/NavBar";
//Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
