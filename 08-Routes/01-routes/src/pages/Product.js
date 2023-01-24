import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import "./Product.css";
const Product = () => {
  //4-rota dinamica
  const { id } = useParams();
  //carregamento dado individual
  const url = `http://localhost:3000/products/${id}`;
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>Id do produto: {id}</p>
      {error && <p>Ocorreu um erro!!</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$:{product.price}</p>
          {/* 6- nested routes */}
          <Link to={`/products/${product.id}/info`}>More Informations</Link>
        </div>
      )}
    </>
  );
};
export default Product;
