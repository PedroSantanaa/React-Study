import "./App.css";
import { useEffect, useState } from "react";
//4-custom hook
import { useFetch } from "./hooks/useFetch";

//Url-base
let url = "http://localhost:3000/products";
function App() {
  const [products, setProducts] = useState([]);
  //4-custom hook
  const { data: items, htppConfig, loading, error } = useFetch(url);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // 1-Resgatando Dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  //2-add produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };
    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(product),
    //   });

    //   //3-carregamento dinamico
    //   const addedProduct = await response.json();
    //   setProducts((otherProducts) => [...otherProducts, addedProduct]);

    //5-refatorando o post
    htppConfig(product, "POST");
    setName("");
    setPrice("");
  };

  //Desafio

  const handleDelete = (id) => {
    htppConfig(id, "DELETE");
  };
  return (
    <div className="App">
      <h1>Products List:</h1>
      {/* 6-loading */}
      {loading && <p>Carregando Dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name}-- R$:{product.price}
                <button onClick={() => handleDelete(product.id)}>
                  Deletar
                </button>
              </li>
            ))}
        </ul>
      )}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço(R$):
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* state de loading no post */}
          {loading && <input type="submit" value="Aguarde" disabled />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
