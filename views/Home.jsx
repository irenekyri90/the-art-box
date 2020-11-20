const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function Home() {
  return (
    <Layout title="Home Page">
      <h1>Home Page</h1>
      <button>
        <a href="/results/Wellness">WELLNESS</a>
      </button>

      <button>
        <a href="/results/Gardening">GARDENING</a>
      </button>

      <button>
        <a href="/results/Misc">MISC</a>
      </button>

      <button>
        <a href="/results/Home Decor">HOME DECOR</a>
      </button>
    </Layout>
  );
}

module.exports = Home;
