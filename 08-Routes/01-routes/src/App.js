import "./App.css";

//1-Config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
//Components
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

//hooks

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar />
        {/* 9-Search Params */}
        <SearchForm />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rota dinamica dos produtos */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6-nested routes */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 9-Search */}
          <Route path="/search" element={<Search />} />
          {/* 10-Redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* 7-no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
