import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="bg-primary">
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 pt-4 pb-4">
          <div className="container-fluid text-font">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
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
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item px-5">
                    <button className="btn ">Service</button>
                  </li>
                  <li className="nav-item px-5">
                    <button className="btn ">About Us</button>
                  </li>
                  <li className="nav-item px-5">
                    <button className="btn ">Careers</button>
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
      </div>
    </>
  );
};

export default NavBar;
