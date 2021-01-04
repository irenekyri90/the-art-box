const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");
const { PromiseProvider } = require("mongoose");

function Home(props) {
  return (
    <Layout title="The Art Box" userIsLoggedIn={props.userIsLoggedIn}>
      <h1 className="top-quote">
        "Being Creative is not a Hobby, it's a Way of Life!"
      </h1>
      <h3 id="category-picker">pick a category</h3>

      <div id="categories">
        <a href="/results/Wellness">
          <div className="category-container wellness">
            <h3>Wellness</h3>
          </div>
        </a>

        <a href="/results/Gardening">
          <div className="category-container gardening">
            <h3>Gardening</h3>
          </div>
        </a>

        <a href="/results/Misc">
          <div className="category-container misc">
            <h3>Misc</h3>
          </div>
        </a>

        <a href="/results/Home Decor">
          <div className="category-container decor">
            <h3>Home Decor</h3>
          </div>
        </a>

        <a href="/results/Jewelry">
          <div className="category-container jewelry">
            <h3>Jewelry</h3>
          </div>
        </a>
      </div>
      <form action="/craft-search" method="GET" id="searchbar">
        <input
          type="text"
          name="searchRequest"
          placeholder="What are you looking for?"
        />
        <button type="submit" value="search" id="search-button">
          Search
        </button>
      </form>
    </Layout>
  );
}

module.exports = Home;
