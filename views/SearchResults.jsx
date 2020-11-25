const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function SearchResults(props) {
  return (
    <Layout title="SearchResults">
    <div className="add-creativity">
        <h2>Feeling Creative?</h2>
        <button className="shareButton">
          <a href="/addPost">Share your ideas !</a>
        </button>
      </div>
      <div className="results">
      {props.crafts.map((craft, i) => {
        return <Card key={i} craft={craft} />;
      })}
      </div>
    </Layout>
  );
}

module.exports = SearchResults;
