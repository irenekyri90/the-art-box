const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function Favorites(props) {
  return (
    <Layout title="Favorites">
      <section id="favorites-page">
        <h3 id="welcome-message">Hello, {props.user.username} !</h3>
        <div className="empty-posts">
          <h1>Saved Posts</h1>
          {props.user.favorites.length === 0 ? (
            <p>You haven't saved any posts yet.</p>
          ) : (
            <div className="results">
              {props.user.favorites.map((craft, i) => {
                return <Card key={i} craft={craft} displayUnsaveBtn={true} />;
              })}
            </div>
          )}
        </div>

        <hr />

        <div className="empty-posts">
          <a href="/addPost">
            <button className="shareButton">Share your ideas !</button>
          </a>
          <h1>Your Posts</h1>

          {props.user.posts.length === 0 ? (
            <p>You haven't posted anything yet.</p>
          ) : (
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
          )}
        </div>
      </section>
    </Layout>
  );
}

module.exports = Favorites;
