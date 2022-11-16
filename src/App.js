import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === "") return;

    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=25&srsearch=${search}`;

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json_response = await response.json();
    setResults(json_response.query.search);
    setSearchInfo(json_response.query.searchinfo);
  };
  return (
    <div className="App">
      <header>
        <h1>Wiki Seeker</h1>
        <h3>A Wikipedia Search Engine</h3>
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="What are you looking for?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </form>
        {searchInfo.totalhits ? (
          <p>Search Results: {searchInfo.totalhits} </p>
        ) : (
          " "
        )}
      </header>
      <div className="results">
        {results.map((result, i) => {
          const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
          return (
            <div className="result">
              <h3>{result.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
              <a href={url} target="_blank" rel="noreferrer">
                Read more
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
