import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import "./App.css";
function App() {
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);

  const loadFromAPI = async (key) => {
    const url = "https://imdb146.p.rapidapi.com/v1/find/?query=";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "imdb146.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url + search, options);
      const result = await response.text();
      const json = JSON.parse(result);
      localStorage.setItem("movie-data", JSON.stringify(json));
      const list = json.titleResults.results;
      setData(() => {
        return [];
      });
      list.map((item) => {
        setData((currentData) => {
          return [...currentData, item];
        });
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const searchResult = () => {
    fetch("apikey.txt")
      .then((response) => response.text())
      .then((text) => loadFromAPI(text));
  };
  return (
    <div className="app">
      <SearchBar search={searchResult} update={setSearch} />
      <Results data={data} />
    </div>
  );
}

export default App;
