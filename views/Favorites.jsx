const React = require("react");
const Layout = require("./Layout");

function Favorites(props) {
  return (
    <Layout>
      <h3>HELLO, {props.user.username}</h3>
      <h1>Saved Posts</h1>
      {props.user.favorites.map((el, i) => {
        //crafts here
      })}
    </Layout>
  );
}

module.exports = Favorites;
