const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title> {props.title ? props.title : "My App"} </title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossOrigin="anonymous"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/stylesheets/style.css" />
        <script
          src="https://kit.fontawesome.com/fce4b78cef.js"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
            <a className="navbar-brand" href="/">
              <img id="logo" src="./../images/logo.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Browse <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/favorites">
                    Favorites
                  </a>
                </li>
                {!props.userIsLoggedIn ? (
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/signup">
                      Sign Up
                    </a>
                  </li>
                ) : null}
                {!props.userIsLoggedIn ? (
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/login">
                      Log In
                    </a>
                  </li>
                ) : null}
                {props.userIsLoggedIn ? (
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/logout">
                      Log out
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          </nav>
        </header>
        <main>{props.children}</main>
        <footer>
          <div className="footer-div">
            <p>Follow us</p>
            <i className="fab fa-facebook-f footer-icon"></i>
            <i className="fab fa-instagram footer-icon"></i>
            <i className="fab fa-twitter footer-icon"></i>
            <i className="far fa-envelope footer-icon"></i>
          </div>
        </footer>

        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}

module.exports = Layout;
