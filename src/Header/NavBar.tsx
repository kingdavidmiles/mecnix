import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavBarMobile from "./NavBarMoblie";
import { Link as ReactScroll } from "react-scroll";
const NavBar = () => {
  return (
    <>
      <div className="bg-primary">
        <NavBarMobile />
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light px-5 pt-2 pb-2 d-none d-md-block">
          <div className="container-fluid text-font">
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
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item px-5 ">
                    <ReactScroll to="service" spy={true}  className="btn nav-bar-text">
                      Service
                    </ReactScroll>
                  </li>
                  <li className="nav-item px-5">
                    <button className="btn nav-bar-text">About Us</button>
                  </li>
                  <li className="nav-item px-5 nav-bar-text">
                    <Link
                      className="text-dark"
                      to="/career"
                      style={{ textDecoration: "none" }}
                    >
                      Careers
                    </Link>
                  </li>
                  <button
                    className="btn btn-outline-success pt-2 pb-2 nav-bar-text "
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
      </div>
    </>
  );
};

export default NavBar;
