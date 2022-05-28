import React from "react";
import "./App.css";
import ConnectWithPeople from "./component/ConnectWithPeople";
import Years from "./component/Years";
import Service from "./component/Service";
import PublicRelation from "./component/PublicRelation";
import Portfolio from "./component/Portfolio";
import Testimony from "./component/Testimony";
import NavBar from "./Header/NavBar";
import Footer from "./component/Footer";
function App() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          background: "rgba(1, 14, 45, 0.9)",
          color: "white",
          height: "50rem",
        }}
      >
        <div className="row px-0 mx-0">
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
          <div className="col-12 col-md-10 col-lg-10 col-xl-10">
            <div className="row container pt-md-5 ">
              <div className=" col-12 col-md-12 col-lg-12 col-xl-6 ">
                <p className=" pt-5  banner-sub-text" id="banner-sub-text">
                  Build. Manage.
                </p>
                <p className=" banner-text" id="banner-text">
                  PROMOTE.
                </p>

                <p className="puplic-relation-text">
                  We are a Strategic Marketing agency. we set new brands in
                  motion, revive existing ones and create fresh customer's
                  experiences.
                </p>
                <div className="pt-4">
                  <button
                    className="btn  btn-lg  banner-btn-text"
                    style={{
                      borderRadius: "10px",
                      borderColor: "#FDC604",
                      color: "#FDC604",
                    }}
                  >
                    Send a Request
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-12 col-xl-6 d-none d-md-none d-lg-none d-xl-block">
                <div className="">
                  <img
                    src="/img/Mecnix-1.gif"
                    alt="gif image"
                    className="banner-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
        </div>
      </div>

      <div className="px-xl-5 pb-5">
        <ConnectWithPeople /> 
      </div>

      <div className="px-xl-5 pb-5" style={{ background: "#ECF5FE;" }}>
        <Years /> 
        <br />
      </div>

      <div
        className="px-5 pb-5"
        style={{
          background: " linear-gradient(180deg, #017EF1 0%, #5DC5F2 89.6%)",
        }}
      >
        <Service />
        <br />
      </div>

      <div className="px-xl-5 pb-5">
        <PublicRelation />
        <br />
      </div>

      <div className="px-5 pb-5" style={{ background: "rgb(255 251 239)" }}>
        <Portfolio />
        <br />
      </div>

      <div className="px-5 pb-5 ">
        <Testimony />
        <br />
      </div>

      <Footer />
    </div>
  );
}

export default App;
