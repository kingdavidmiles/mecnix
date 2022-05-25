import React from "react";
import "../App.css";

const Portfolio = () => {
  return (
    <div>
      <div className="row">
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
              <div className="row text-font gx-5">
                <div className="col-3 ">
                  <div
                    className="card"
                    style={{
                      borderRadius: "10px",
                      background: "none",
                      height: "15rem",
                    }}
                  >
                    <div className="card-body portfolio-card-text">image 1</div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    className="card"
                    style={{
                      borderRadius: "10px",
                      background: "none",
                      height: "15rem",
                    }}
                  >
                    <div className="card-body portfolio-card-text">image 2</div>
                  </div>
                </div>

                <div className="col-3">
                  <div
                    className="card"
                    style={{
                      borderRadius: "10px",
                      background: "none",
                      height: "15rem",
                    }}
                  >
                    <div className="card-body portfolio-card-text">image 3</div>
                  </div>
                </div>

                <div className="col-3">
                  <div
                    className="card"
                    style={{
                      borderRadius: "10px",
                      background: "none",
                      height: "15rem",
                    }}
                  >
                    <div className="card-body portfolio-card-text">image 4</div>
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
