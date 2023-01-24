import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    navigate(`/search?q=${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input
          type="text"
          value={query}
          onChange={(ev) => setQuery(ev.target.value)}
        />
        <input type="submit" value="Search" />
      </label>
    </form>
  );
};
export default SearchForm;
