const React = require("react");
const Layout = require("./Layout");

function Signup(props) {
  return (
    <Layout>
      <h1 class="top-quote">"I craft so hard I sweat glitter."</h1>
      <form id="signup-form" action="/auth/signup" method="POST">
        <label>Username</label>

        <input type="text" name="username" placeholder="Your username" />
        <br />
        <label>Email</label>

        <input type="email" name="email" placeholder="Your email address" />
        <br />
        <label>Password</label>

        <input type="password" name="password" />
        <br />
        <button type="submit">Create account</button>

        {props.errorMessage ? (
          <div className="error-message"> {props.errorMessage} </div>
        ) : null}
      </form>
    </Layout>
  );
}

module.exports = Signup;
