const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function SearchResults(props) {
  return (
    <Layout title="SearchResults">
      <h2>Feeling Creative?</h2>
      <button className="shareButton">
        <a href="/addPost">Share your ideas!</a>
      </button>
      {props.crafts.map((craft, i) => {
        return <Card key={i} craft={craft} />;
      })}
    </Layout>
  );
}

module.exports = SearchResults;
