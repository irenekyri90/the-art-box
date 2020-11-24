const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function Favorites(props) {
  return (
    <Layout>
      <section id="favorites-page">
        <h3 id="welcome-message">HELLO, {props.user.username}!</h3>
        <h1>Saved Posts</h1>
        <div className="results">
          {props.user.favorites.map((craft, i) => {
            return <Card key={i} craft={craft} displayUnsaveBtn={true} />;
          })}
        </div>
        <h1>Your Posts</h1>
        <button className="shareButton">
          <a href="/addPost">Share your ideas!</a>
        </button>
        <div className="results">
          {props.user.posts.map((craft, i) => {
            return (
              <div>
                <Card
                  key={i}
                  craft={craft}
                  userId={props.user._id}
                  displayEditBtn={true}
                />
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

module.exports = Favorites;
