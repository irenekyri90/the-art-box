const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function Favorites(props) {
  return (
    <Layout>
      <h3>HELLO, {props.user.username}</h3>
      <h1>Saved Posts</h1>
      {props.user.favorites.map((craft, i) => {
        return <Card key={i} craft={craft} displayUnsaveBtn = {true} />;
      })}
      <h1>My own Posts</h1>
      <button className="shareButton">
        <a href="/addPost">Share your ideas!</a>
      </button>
      {props.user.posts.map((craft, i) => {
        return (
          <div>
            <Card key={i} craft={craft} userId={props.user._id} displayEditBtn = {true}/>
          </div>
        );
      })}
    </Layout>
  );
}

module.exports = Favorites;
