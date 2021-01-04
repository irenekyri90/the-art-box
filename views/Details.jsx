const React = require("react");
const Layout = require("./Layout");

function Details(props) {
  return (
    <Layout title="Details" userIsLoggedIn={props.userIsLoggedIn}>
      <div className="backbutton">
        <a href={`/results/${props.craft.category}`} className="back">
          <i className="fas fa-arrow-left"></i>
          <span> Back to results</span>
        </a>
      </div>

      <div id="parent-div">
        <div id="upper-details">
          <img src={props.craft.imageURL} />
          <div id="side-details">
            <h3>{props.craft.title}</h3>
            <p>{props.craft.description}</p>
            <h2>Materials</h2>
            <ul>
              {props.craft.materials.map((element, i) => {
                if (element.length === 0) {
                  return null;
                } else {
                  return <li key={i}>{element}</li>;
                }
              })}
            </ul>
          </div>
        </div>
        <div id="lower-details">
          <h2>Instructions</h2>
          <ol>
            {props.craft.instructions.map((element, i) => {
              if (element.length === 0) {
                return null;
              } else {
                return <li key={i}>{element}</li>;
              }
            })}
          </ol>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Details;
