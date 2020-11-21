const React = require("react");

function Card(props) {
  return (
    <a href={`/details/${props.craft._id}`}>
      <div>
        <h1>{props.craft.title}</h1>
        <img src={props.craft.imageURL} width="300px" height="auto" />
      </div>
    </a>
  );
}

module.exports = Card;
