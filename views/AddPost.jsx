const React = require("react");
const Layout = require("./Layout");

function AddPost(props) {
  return (
    <Layout>
      <h3>ADD A POST, {props.user.username}</h3>
    </Layout>
  );
}

module.exports = AddPost;
