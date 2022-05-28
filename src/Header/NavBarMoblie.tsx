import React from "react";
import { Outlet, Link } from "react-router-dom";
const NavBarMobile = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  d-block d-md-none">
        <div className="container-fluid">
          <Link to="/">
            <img
              src="/img/navberIcon.png"
              alt="image"
              className="nav-bar-logo "
            />
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <button className="btn ">Service</button>
                </li>
                <li className="nav-item ">
                  <button className="btn ">About Us</button>
                </li>
                <li className="nav-item px-3 pb-2">
                  <Link
                    className="text-dark"
                    to="/career"
                    style={{ textDecoration: "none" }}
                  >
                    Careers
                  </Link>
                </li>
                <button
                  className="btn btn-outline-success pt-2 pb-2 "
                  style={{
                    borderRadius: "10px",
                    borderColor: "#FDC604",
                    color: "#FDC604",
                  }}
                >
                  Contact Us
                </button>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarMobile;
