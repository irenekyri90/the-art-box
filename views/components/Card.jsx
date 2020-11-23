const React = require("react");

function Card(props) {
  const createdBy = `${props.craft.createdBy}`;
  const userId = `${props.userId}`;
  //const userFaves = props.userFaves;
  //console.log("USERFAVES", userFaves);
  const craftId = `${props.craft._id}`;
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

        {props.displayUnsaveBtn ? (
          <button>
            <a href={`/unsavePost/${props.craft._id}`}>Unsave Post</a>
          </button>
        ) : null}

        {props.displayEditBtn ? (
          <button>
            <a href={`/editPost/${props.craft._id}`}>Edit Post</a>
          </button>
        ) : null}
      </div>
    </a>
  );
}

module.exports = Card;
