import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/mainLogo-removebg-preview.png";

function Navbar() {
  return (
    <>
      <div
        className="w-100 bg-primary d-flex justify-content-center align-items-center"
        style={{ position: "fixed", zIndex: "999" }}
      >
        <nav className="w-100 navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid d-flex align-items-center main-pharma">
            {/* Logo takes 20% of the space */}
            <div className="logo-container">
              <Link to="/">
                <img src={mainLogo} alt="Logo" className="logo" />
              </Link>
            </div>
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
            {/* Links take 80% of the space */}
            <div
              className="collapse navbar-collapse nav-links-container"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center nav-bar">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/products">
                    Our Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/company-profile">
                    Company Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
