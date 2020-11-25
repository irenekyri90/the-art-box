const React = require("react");

function Card(props) {
  const createdBy = `${props.craft.createdBy}`;
  const userId = `${props.userId}`;
  //const userFaves = props.userFaves;
  //console.log("USERFAVES", userFaves);
  const craftId = `${props.craft._id}`;
  return (
    <div className="card">
      <a href={`/details/${props.craft._id}`}>
        <img src={props.craft.imageURL} />
      </a>
      <h1>{props.craft.title}</h1>

      <div className="icon-parent">
        <div className="fave-div">
          <a href={`/savePost/${props.craft._id}`}>
            <i className="fas fa-heart"></i>
          </a>

          {props.displayUnsaveBtn ? (
            <a href={`/unsavePost/${props.craft._id}`}>
              <i className="fas fa-heart-broken"></i>
            </a>
          ) : null}
        </div>

        <div className="edit-div">
          {createdBy === userId ? (
            <a href={`/deletePost/${props.craft._id}`}>
              <i className="fas fa-trash-alt"></i>
            </a>
          ) : null}

          {props.displayEditBtn ? (
            <a href={`/editPost/${props.craft._id}`}>
              <i className="fas fa-pencil-alt"></i>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

module.exports = Card;
