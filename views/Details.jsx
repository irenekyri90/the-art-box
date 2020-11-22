const React = require("react");
const Layout = require("./Layout");

function Details(props) {
  return (
    <Layout title="Results">
      <h3>{props.craft.title}</h3>
      <img src={props.craft.imageURL} width="300px" height="auto" />
      <p>{props.craft.description}</p>
      <ul>
        {props.craft.materials.map((element, i) => {
          return <li key={i}>{element}</li>;
        })}
      </ul>
      <ol>
        {props.craft.instructions.map((element, i) => {
          return <li key={i}>{element}</li>;
        })}
      </ol>
    </Layout>
  );
}

module.exports = Details;
