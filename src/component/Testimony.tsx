import React from "react";
import "../App.css";

const Testimony = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
        <div className="col-12 col-md-10 col-lg-10 col-xl-10">
          <div className=" pt-5">
            <div>
              <h1
                style={{ fontWeight: "bolder", textAlign: "left" }}
                className="text-dark display-5 pt-5 pb-2"
              >
                Testimonial
              </h1>

              <div
                style={{ textAlign: "left" }}
                className="text-dark text-font  pb-5"
              >
                Get to know about what our client think about us
              </div>
              <div className="card mb-3 border-0">
                <div className="row g-0">
                  <div className="col-md-1">
                    <div
                      className="card  h-100 "
                      style={{ width: "70%", background: "rgb(5 14 46)" }}
                    ></div>
                  </div>
                  <div className="col-md-11">
                    <div className="card-body">
                      <p className="card-text text-font pt-3 pb-5">
                        Patronizing mecnix for caspade's branding and marketing
                        was worth
                        <br></br>
                        the choice. Mecnix will always hold end to suite sales,
                        <br></br>
                        engagement and creative response. I also offer my vote
                        of
                        <br></br>
                        thanks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="row">
                  <div className="col-md-1">
                    <div
                      className="card h-50 "
                      style={{
                        width: "82%",
                        background: "rgb(250 198 3)",
                        border: "none",
                      }}
                    ></div>
                  </div>
                  <div className="col-md-11">
                    <div
                      className="card-body px-md-5"
                      style={{ fontWeight: "", textAlign: "right" }}
                    >
                      <h1 className="text-dark display-5">Emmanuel</h1>
                      <span>CEO Caspade</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <img
                  className="rounded-circle "
                  alt="100x100"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  data-holder-rendered="true"
                  style={{ width: "100px", height: "100px", opacity:"0.5" }}
                />
                &nbsp;  &nbsp;
                <img
                  className="rounded-circle"
                  alt="100x100"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  data-holder-rendered="true"
                  style={{ width: "200px", height: "200px" }}
                />
                 &nbsp;  &nbsp;
                <img
                  className="rounded-circle"
                  alt="100x100"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  data-holder-rendered="true"
                  style={{ width: "100px", height: "100px",opacity:"0.5" }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
