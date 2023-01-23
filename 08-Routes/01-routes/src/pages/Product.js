import { useParams } from "react-router-dom";

import "./Product.css";
const Product = () => {
  //4-rota dinamica
  const { id } = useParams();
  return (
    <>
      <p>Id do produto: {id}</p>
    </>
  );
};
export default Product;
