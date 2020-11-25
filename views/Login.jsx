const React = require("react");
const Layout = require("./Layout");

function Login(props) {
  return (
    <Layout>
      <h1 class="top-quote">"Creative minds are rarely tidy."</h1>
      <h3 class="signup-message">log in</h3>
      <form id="login-form" action="/auth/login" method="POST">
        <br />
        <input type="text" name="username" placeholder="username" />

        <br />
        <input type="password" name="password" placeholder="password" />

        <button type="submit" id="login-button">
          login
        </button>
      </form>

      {props.errorMessage ? (
        <div className="error-message"> {props.errorMessage}</div>
      ) : null}

      <p className="account-message">
        Don't have an account? <a href="/auth/signup">Sign up</a>
      </p>
    </Layout>
  );
}

module.exports = Login;
