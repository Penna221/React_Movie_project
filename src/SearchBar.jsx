import { useState } from "react";
import "./SearchBar.css";
function SearchBar(props) {
  const [query, setQuery] = useState("");
  const handleClick = () => {
    props.search(query);
  };

  return (
    <div className="searchBar">
      <h2>Search movies</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={query}
          id="search_input"
          placeholder="for example: Interstellar"
          onChange={(e) => {
            setQuery(e.target.value);
            props.update(e.target.value);
          }}
        />
        <button onClick={() => handleClick()}>Filter</button>
      </form>
    </div>
  );
}

export default SearchBar;
