import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = `http://localhost:3000/products?${searchParams}`;
  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$:{item.price}</p>
              {/* rota dinamica dos produtos */}
              <Link to={`/products/${item.id}`}>Details</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Search;
