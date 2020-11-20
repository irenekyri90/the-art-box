const React = require("react");
const Layout = require("./Layout");
//const Card = require("./components/Card");

function Results(props) {
  return (
    <Layout title="Home Page">
      <h1>Results Page</h1>
      {props.crafts.map((oneCraft, i) => {
        return (
          <div>
            <h1 key={i}>{oneCraft.title}</h1>
            <img src={oneCraft.imageURL} width="300px" height="auto" />
            <p>{oneCraft.description}</p>
            <ul>
              {oneCraft.materials.map((element, i) => {
                return <li key={i}>{element}</li>;
              })}
            </ul>
            <ol>
              {oneCraft.instructions.map((element, i) => {
                return <li key={i}>{element}</li>;
              })}
            </ol>
            {/* {oneCraft.createdBy !== null ? ()} */}
          </div>
        );
      })}
    </Layout>
  );
}

module.exports = Results;
