import "./App.css";
import { useEffect, useState } from "react";

//Url-base
const url = "http://localhost:3000/products";
function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // 1-Resgatando Dados
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  //2-add produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    //3-carregamento dinamico
    const addedProduct = await response.json();
    setProducts((otherProducts) => [...otherProducts, addedProduct]);
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Products List:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}-- R$:{product.price}
          </li>
        ))}
      </ul>
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
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
