const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function SearchResults(props) {
  return (
    <Layout title="SearchResults">
      <div className="add-creativity">
        <h2>Feeling Creative?</h2>
        <a href="/addPost">
          <button className="shareButton">Share your ideas !</button>
        </a>
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
