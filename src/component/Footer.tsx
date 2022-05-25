import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div style={{ background: "rgb(4 40 101)" }}>
      <div className="row">
        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
        <div className="col-12 col-md-10 col-lg-10 col-xl-10">
          <div className=" pt-5">
            <div className="text-center">
              <div className="row text-font">
                <div className="col-6">
                  <p className="text-font">Connect with us</p>
                </div>
                <div className="col-6">
                  <div>
                    <div className="d-flex bd-highlight px-md-5">
                      <div className=" flex-fill bd-highlight">9</div>
                      <div className=" flex-fill bd-highlight">4</div>
                      <div className=" flex-fill  bd-highlight">5</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row text-font ">
                <div className="col-4">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" className="img-fluid" alt="..."/>
                </div>
                <div className="col-4">
                  <div>
                   <h2>Our Services</h2>
                  </div>
                </div>
                <div className="col-4">
                  <div>
                    <div className="d-flex bd-highlight px-md-5">
                      <div className=" flex-fill bd-highlight">9</div>
                      <div className=" flex-fill bd-highlight">4</div>
                      <div className=" flex-fill  bd-highlight">5</div>
                    </div>
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

export default Footer;
