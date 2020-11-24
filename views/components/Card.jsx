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

        <a href={`/savePost/${props.craft._id}`}>
          <i className="fas fa-heart"></i>
        </a>

        {createdBy === userId ? (
          <a href={`/deletePost/${props.craft._id}`}>
            <i className="fas fa-trash-alt"></i>
          </a>
        ) : null}

        {props.displayUnsaveBtn ? (
          <a href={`/unsavePost/${props.craft._id}`}>
            <i className="fas fa-heart-broken"></i>
          </a>
        ) : null}

        {props.displayEditBtn ? (
          <a href={`/editPost/${props.craft._id}`}>
            <i className="fas fa-pencil-alt"></i>
          </a>
        ) : null}
      </div>
    </a>
  );
}

module.exports = Card;
