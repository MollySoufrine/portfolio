import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="container ">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <h1 className="navbar-brand font-weight-bold">Molly Soufrine</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link className="nav-link text-info font-weight-bold" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-info font-weight-bold"
                  to="portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-info font-weight-bold"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
