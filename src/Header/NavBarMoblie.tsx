import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Link as ReactScroll } from "react-scroll";
const NavBarMobile = () => {
  return (
    <>
      <div className="pt-5">
        <nav className=" navbar navbar-expand-lg navbar-light bg-light fixed-top  d-block d-md-none">
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
            <div
              className="collapse navbar-collapse pb-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item ">
                    <ReactScroll
                      to="service"
                      spy={true}
                      className="btn nav-bar-text py-3"
                    >
                      Service
                    </ReactScroll>
                  </li>
                  <li className="nav-item ">
                    <button className="btn nav-bar-text py-3">About Us</button>
                  </li>
                  <li className="nav-item px-3 pb-2 nav-bar-text pt-3 pb-5">
                    <Link
                      className="text-dark"
                      to="/career"
                      style={{ textDecoration: "none" }}
                    >
                      Careers
                    </Link>
                  </li>
                  <button
                    className="btn btn-outline-success pt-2 pb-2  nav-bar-text "
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

export default NavBarMobile;
