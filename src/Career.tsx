import React from "react";
import "./App.css";
import NavBar from "./Header/NavBar";
import Footer from "./component/Footer";
import JobOpening from "./component/JobOpening";
const CareerPage = () => {
  return (
    <div>
      <NavBar />
      <div className="career-page-image">Career page </div>
      <div className="row px-0 mx-0">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="row pb-5 gx-5">
            <div className="col-8">
              <div
                className="card career-page-image-blurr career-card-position"
                style={{ height: "300px", borderRadius: "10px" }}
              >
                <div className="card-body">
                  <div className="">
                    <h1
                      className="display-3 career-text-position p-5"
                      style={{ fontWeight: "bolder" }}
                    >
                      Live and work from anywhere
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 px-lg-5 pt-5">
              <div className="d-flex bd-highlight">
                <div className="  bd-highlight px-2">
                  <i
                    className="bi bi-hexagon-fill"
                    style={{ fontSize: 60, color:"rgb(250 198 3)" }}
                  ></i>
                </div>
                <div className="p-2 flex-fill bd-highlight">
                  <div
                    className="card border-0 "
                    style={{ background: "rgb(250 198 3)", borderRadius: "10px" }}
                  >
                    <div
                      className="card-body text-center display-6"
                      style={{ fontWeight: "bolder" }}
                    >
                      Explore
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div>
              <h1 style={{ fontWeight: "bolder" }}>Working from Home?</h1>
              <p style={{ fontSize: 32 }}>
                We have a new design for a living and working anywhere!. Here at
                mecnix we have provided the neccessary facilities you need to
                work from the comfort from your home
              </p>
            </div>
          </div>

          <div className="pt-5 pb-5">
            <div className="row">
              <div className="col-5">
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/12/14/07/basketball-147794_960_720.png"
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div className="col-7">
                <h1 style={{ fontWeight: "bolder" }}>Our Mission</h1>
                <p style={{ fontSize: 32 }}>
                  We have a new design for a living and working anywhere!. Here
                  at mecnix we have provided the neccessary facilities you need
                  to work from the comfort from your home
                </p>
              </div>
            </div>
          </div>

          <div className="pt-5 pb-5">
            <div className="card" style={{ borderRadius: "40px" }}>
              <img
                src="https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  maxHeight: "500px",
                  borderRadius: "40px 40px 0px 0px",
                }}
              />
              <div className="top-left">
                <div
                  className="card pt-3 pb-3 text-white"
                  style={{
                    width: "600px",
                    height: "110px",
                    borderRadius: "10px",
                    background:"rgb(2 31 75)"
                  }}
                >
                  <div
                    className="card-body text-center display-6"
                    style={{ fontWeight: "bolder" }}
                  >
                    Together @mecnix
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p style={{ fontSize: 32 }} className="px-lg-5">
                  We have a new design for a living and working anywhere!. Here
                  at mecnix we have provided the neccessary facilities you need
                  to work from the comfort from your home
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 "></div>
        <JobOpening />
      </div>
      <Footer />
    </div>
  );
};

export default CareerPage;
