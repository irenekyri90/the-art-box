const React = require("react");

function Card(props) {
  return (
    <a href={`/details/${props.craft._id}`}>
      <div className="card">
        <img src={props.craft.imageURL} />
        <h1>{props.craft.title}</h1>
        <button>
          <a href={`/savePost/${props.craft._id}`}>Save Post</a>
        </button>
      </div>
    </a>
  );
}

module.exports = Card;
