import React, { useEffect, useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [input, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState(false);
  const [cache, setCache] = useState({});

  async function fetchData(input) {
    if (cache[input]) {
      setResults(cache[input]);
      return;
    }
    const results = await fetch(
      "https://dummyjson.com/recipes/search?q=" + input
    );
    const data = await results?.json();
    setResults(data?.recipes);
    setCache((prev) => ({ ...prev, [input]: data?.recipes }));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(input);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="search-container">
      <h1>AutoComplete Search Bar</h1>
      <input
        className="text-area"
        type="text"
        value={input}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setDisplay(true)}
        onBlur={() => setDisplay(false)}
      />
      {display && input !== "" && (
        <div className="results-container">
          {results.map((item) => {
            return (
              <span className="results" key={item.id}>
                {item.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
