const React = require("react");
const Layout = require("./Layout");

function Favorites(props) {
  return (
    <Layout>
      <h3>HELLO, {props.user.username}</h3>
    </Layout>
  );
}

module.exports = Favorites;
