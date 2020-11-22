const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function Home() {
  return (
    <Layout title="Home Page">
      <h1 class="top-quote">
        "Being Creative is not a Hobby, it's a Way of Life!"
      </h1>

      <div id="categories">
        <a href="/results/Wellness">
          <div class="category-container wellness">
            <h3>Wellness</h3>
          </div>
        </a>

        <a href="/results/Gardening">
          <div class="category-container gardening">
            <h3>Gardening</h3>
          </div>
        </a>

        <a href="/results/Misc">
          <div class="category-container misc">
            <h3>Misc</h3>
          </div>
        </a>

        <a href="/results/Home Decor">
          <div class="category-container decor">
            <h3>Home Decor</h3>
          </div>
        </a>

        <a href="/results/Jewelry">
          <div class="category-container jewelry">
            <h3>Jewelry</h3>
          </div>
        </a>
      </div>
    </Layout>
  );
}

module.exports = Home;
