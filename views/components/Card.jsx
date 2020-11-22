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
        {console.log("PROPS:USERID", props.userId)}
        {console.log("PROPS:CREATEDBY", props.craft.createdBy)}
        {createdBy === userId ? (
          <button>
            <a href={`/savePost/${props.craft._id}`}>Delete Post</a>
          </button>
        ) : (
          <h1>Bye</h1>
        )}
      </div>
    </a>
  );
}

module.exports = Card;
