const React = require("react");
const Layout = require("./Layout");

function Signup(props) {
  return (
    <Layout>
      <h1 class="top-quote">"I craft so hard I sweat glitter."</h1>

      <h3 class="signup-message">sign up</h3>
      <form id="signup-form" action="/auth/signup" method="POST">
        <input type="text" name="username" placeholder="username" />
        <br />

        <input type="email" name="email" placeholder="email address" />
        <br />

        <input type="password" name="password" placeholder="password" />
        <br />
        <button type="submit" id="signup-button">
          create account
        </button>

        {props.errorMessage ? (
          <div className="error-message"> {props.errorMessage} </div>
        ) : null}
      </form>
    </Layout>
  );
}

module.exports = Signup;
