const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title ? props.title : "My App"} </title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>

      <body>
        <header>
          <nav>
            <ul>
              <li>Your Profile</li>
              <li>Login</li>
              <li>Signup</li>
            </ul>
            <button>
              <a href="/auth/logout">Log out</a>
            </button>
          </nav>
        </header>
        <main>{props.children}</main>
        <footer>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </footer>
      </body>
    </html>
  );
}

module.exports = Layout;
