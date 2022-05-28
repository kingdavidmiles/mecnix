import React from "react";
import "../App.css";

const Portfolio = () => {
  return (
    <div>
      <div className="row px-0 mx-0">
        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
        <div className="col-12 col-md-10 col-lg-10 col-xl-10">
          <div className=" pt-5">
            <div className="text-center">
              <h1
                style={{ fontWeight: "bolder", textAlign: "left" }}
                className="text-dark display-5 pt-5 pb-5"
              >
                Portfolio
              </h1>
              <div className="row text-font gx-5 px-0 mx-0">
                <div className=" col-12 col-md-6 col-lg-6 col-xl-3">
                  <div className="card-body ">
                    <img src="/img/porfolio.png" alt="image" />
                  </div>
                </div> 
                <div className="col-12 col-md-6 col-lg-6 col-xl-3 ">
                  <div className="card-body ">
                    <img src="/img/porfolio2.png" alt="image" />
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-6 col-xl-3 ">
                <div className="card-body ">
                      <img src="/img/porfolio3.png" alt="image"/>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-6 col-xl-3 ">
                <div className="card-body ">
                      <img src="/img/porfolio4.png" alt="image"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
