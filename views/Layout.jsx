const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title ? props.title : "My App"} </title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        ></link>
        <link rel="stylesheet" href="/stylesheets/style.css" />
        <script
          src="https://kit.fontawesome.com/fce4b78cef.js"
          crossorigin="anonymous"
        ></script>
      </head>

      <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-light ">
          <a class="navbar-brand" href="#">
            <img id="logo" src="./../images/logo.png" alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/favorites">
                  Your Favorites
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/auth/signup">
                  Sign Up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/auth/login">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <button>
          <a href="/auth/logout">Log out</a>
        </button>
        <header></header>
        <main>{props.children}</main>
        <footer>
          <div class="footer-div">
            <p>Follow us</p>
            <i class="fab fa-facebook-f footer-icon"></i>
            <i class="fab fa-instagram footer-icon"></i>
            <i class="fab fa-twitter footer-icon"></i>
            <i class="far fa-envelope footer-icon"></i>
          </div>
        </footer>

        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  );
}

module.exports = Layout;
