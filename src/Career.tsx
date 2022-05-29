import React from "react";
import "./App.css";
import NavBar from "./Header/NavBar";
import Footer from "./component/Footer";
import JobOpening from "./component/JobOpening";
const CareerPage = () => {
  return (
    <div>
      <NavBar />
      <div className="career-page-image" id="career-page-image">
        {" "}
      </div>
      <div className="row px-0 mx-0">
        <div className="col-12 col-md-12 col-lg-12 col-xl-2"></div>
        <div className="col-12 col-md-12 col-lg-12 col-xl-8 pb-5">
          <div className="row pb-md-5 gx-5 px-0 mx-0">
            <div className="col-12 col-md-12 col-lg-12 col-xl-8">
              <div
                className="  career-card"
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
            <div className=" col-12 col-md-12 col-lg-12 col-xl-4 pt-xl-5 pt-0">
              <div className="d-flex bd-highlight">
                <div className="  bd-highlight px-2 pt-2">
                  <img
                    src="/img/Vector.png"
                    alt="image"
                    style={{ width: "80%" }}
                  />
                </div>
                <div className="p-2 flex-fill bd-highlight">
                  <div
                    className="card border-0 "
                    style={{
                      background: "rgb(250 198 3)",
                      borderRadius: "10px",
                    }}
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

          <div className="pt-5 pb-5">
            <div>
              <h1 style={{ fontWeight: "bolder", color: "#023a6d" }}>
                Working from Home?
              </h1>
              <p className="career-text">
                We have a new design for living and working anywhere!. Here at
                mecnix we have provided the necessary facilities you need to
                work from the comfort of your home
              </p>
            </div>
          </div>
          <br></br>
          <div className="pt-md-5 pb-5 ">
            <div className="row px-0 mx-0">
              <div className=" col-12 col-md-12 col-lg-12 col-xl-5 text-center pt-xl-5">
                <img
                  src="/img/Group.png"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div className="col-12 col-md-12 col-lg-12 col-xl-7 pt-5">
                <h1 style={{ fontWeight: "bolder", color: "#023a6d" }}>
                  Our Missions
                </h1>
                <p className="career-text">
                  Setting new brands in motion is one of our core drive in
                  mecnix, but we’re not limited to that as we revive existing
                  ones, create a fresh customer's experiences and also in the
                  space of building a sustainable blockchain
                </p>
              </div>
            </div>
          </div>

          <br></br>
          <div className="pt-5 pb-5">
            <div className="card" style={{ borderRadius: "44px" }}>
              <img
                src="/img/unsplash_Cecb0_8Hx-o.png"
                className="card-img-top"
                alt="..."
                style={{
                  maxHeight: "1000px",
                  borderRadius: "40px 40px 0px 0px",
                }}
              />
              <div className="top-left d-none d-md-none d-lg-block d-xl-block">
                <div
                  className="card pt-3 pb-3 text-white"
                  style={{
                    width: "600px",
                    height: "110px",
                    borderRadius: "10px",
                    background: "rgb(2 31 75)",
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
                <p className="px-lg-5  career-text">
                  e’re United with our Community, to create a world where anyone
                  can belong anywhere......... there’s creativity in
                  interactions and we leverage our youthfulness.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-2 col-xl-2"></div>
        <JobOpening />
      </div>
      <Footer />
    </div>
  );
};

export default CareerPage;
