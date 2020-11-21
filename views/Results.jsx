const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function Results(props) {
  return (
    <Layout title="Results">
      {props.crafts.map((craft, i) => {
        return <Card key={i} craft={craft} />;
      })}
    </Layout>
  );
}

module.exports = Results;
