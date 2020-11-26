const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function SearchResults(props) {
  return (
    <Layout title="SearchResults">
      {props.crafts.length === 0 ? (
        <div id="sorry-message">
          <h3>sorry, we could not find any results :(</h3>
          <div>
            <img src="./../images/paintbrush.png" id="paintbrush" />
          </div>
          <a href="/">back to browse</a>
        </div>
      ) : (
        <div>
          <div className="backbutton">
            <a href="/" className="back">
              <i className="fas fa-arrow-left"></i>
              <span> Back to all categories</span>
            </a>
          </div>
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
        </div>
      )}
    </Layout>
  );
}

module.exports = SearchResults;
