const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function Results(props) {
  return (
    <Layout title="Results">
      <button>
        <a href="/">Back to all categories</a>
      </button>
      <h2>Feeling Creative?</h2>
      <button className="shareButton">
        <a href="/addPost">Share your ideas!</a>
      </button>
      <div className="results">
        {props.crafts.map((craft, i) => {
          return <Card key={i} craft={craft} />;
        })}
      </div>
    </Layout>
  );
}

module.exports = Results;
