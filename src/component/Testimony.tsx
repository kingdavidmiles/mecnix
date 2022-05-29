import React from "react";
import "../App.css";

const Testimony = () => {
  return (
    <div className="">
      <div className="row px-0 mx-0">
        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
        <div className="col-12 col-md-10 col-lg-10 col-xl-10">
          <div className=" pt-5">
            <div>
              <h1 className="text-darkpt-5 pb-2 puplic-relation-head-text">
                Testimonial
              </h1>

              <div
                style={{ textAlign: "left" }}
                className=" pb-5 puplic-relation-text"
              >
                Get to know about what our client think about us
              </div>
              <div className="card mb-3 border-0">
                <div className="row g-0 px-0 mx-0">
                  <div className="col-md-1">
                    <div
                      className="card  h-100 "
                      style={{ width: "70%", background: "rgb(5 14 46)" }}
                    ></div>
                  </div>
                  <div className="col-md-11">
                    <div className="card-body">
                      <p className="card-text puplic-relation-text pt-3 pb-xl-5">
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
                <div className="row ">
                  <div className="col-md-1">
                    <div
                      className="card h-50 "
                      style={{
                        width: "82%",
                        background: "rgb(250 198 3)",
                        border: "none",
                        height: 20,
                      }}
                    ></div>
                  </div>
                  <div className="col-md-11 col-12">
                    <div
                      className="card-body px-md-5  d-none d-md-none d-lg-none d-xl-block"
                      style={{ fontWeight: "", textAlign: "right" }}
                    >
                      <div className="testimony-ceo-name ">Emmanuel</div>
                      <div className="testimony-ceo-sub-name">CEO Caspade</div>
                    </div>

                    <div className="card-body px-md-5  d-block d-md-block d-lg-block d-xl-none">
                      <div className="testimony-ceo-name ">Emmanuel</div>
                      <div className="testimony-ceo-sub-name">CEO Caspade</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center  d-none d-md-none d-lg-none d-xl-block">
                <img
                  className="rounded-circle "
                  alt="100x100"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  data-holder-rendered="true"
                  style={{ width: "100px", height: "100px", opacity: "0.5" }}
                />
                &nbsp; &nbsp;
                <img
                  className="rounded-circle"
                  alt="100x100"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  data-holder-rendered="true"
                  style={{ width: "200px", height: "200px" }}
                />
                &nbsp; &nbsp;
                <img
                  className="rounded-circle"
                  alt="100x100"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  data-holder-rendered="true"
                  style={{ width: "100px", height: "100px", opacity: "0.5" }}
                />
              </div>
              {/* on small devices */}
              <div className="text-center d-block d-md-block d-lg-block d-xl-none ">
                <img
                  className="rounded-circle "
                  alt="100x100"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  data-holder-rendered="true"
                  style={{ width: "80px", height: "80px", opacity: "0.5" }}
                />
                &nbsp; &nbsp;
                <img
                  className="rounded-circle"
                  alt="100x100"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  data-holder-rendered="true"
                  style={{ width: "100px", height: "100px" }}
                />
                &nbsp; &nbsp;
                <img
                  className="rounded-circle"
                  alt="100x100"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  data-holder-rendered="true"
                  style={{ width: "80px", height: "80px", opacity: "0.5" }}
                />
              </div>
              {/* end here */}
            </div>
          </div>
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
