import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [login, setLogin] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex">
        Compiler
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/compiler">
                Compiler
              </Link>
            </li>
            {login ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/mysubmissions"
                  >
                    My Submissions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/leaderboard">
                    Leaderboard
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>

          <button className="btn-primary" onClick={() => setLogin(!login)}>
            {login ? "logout" : "login"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
