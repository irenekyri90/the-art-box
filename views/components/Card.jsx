const React = require("react");

function Card(props) {
  const createdBy = `${props.craft.createdBy}`;
  const userId = `${props.userId}`;
  return (
    <a href={`/details/${props.craft._id}`}>
      <div className="card">
        <img src={props.craft.imageURL} />
        <h1>{props.craft.title}</h1>
        <button>
          <a href={`/savePost/${props.craft._id}`}>Save Post</a>
        </button>

        {createdBy === userId ? (
          <button>
            <a href={`/deletePost/${props.craft._id}`}>Delete Post</a>
          </button>
        ) : null}
      </div>
    </a>
  );
}

module.exports = Card;
