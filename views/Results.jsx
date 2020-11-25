const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function Results(props) {
  return (
    <Layout title="Results">
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
    </Layout>
  );
}

module.exports = Results;
