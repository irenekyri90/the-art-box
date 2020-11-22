const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function Favorites(props) {
  return (
    <Layout>
      <h3>HELLO, {props.user.username}</h3>
      <h1>Saved Posts</h1>
      {props.user.favorites.map((craft, i) => {
        return <Card key={i} craft={craft} />;
      })}
      <h1>My own Posts</h1>
      {props.user.posts.map((craft, i) => {
        {
          console.log("CRAFT:", craft);
        }
        return <Card key={i} craft={craft} />;
      })}
    </Layout>
  );
}

module.exports = Favorites;
