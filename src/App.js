function App() {
  return (
    <div className="App">
      <header>
        <h1>Wiki Seeker</h1>
        <form className="search-box">
          <input type="search" placeholder="What are you looking for?"></input>
        </form>
        <p>Search Results: 0</p>
      </header>
      <div className="results">
        <div className="result">
          <h3>Title Goes Here</h3>
          <p> lorem ipsum dolar</p>
          <a href="a">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default App;
