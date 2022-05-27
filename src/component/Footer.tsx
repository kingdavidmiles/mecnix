import React from "react";
import "../App.css";

const Footer = () => {
  const service = [
    { name: "marketing" },
    { name: "project development" },
    { name: "project management" },
    { name: "SEO optimization" },
  ];
  return (
    <div  className="footer-bg pb-3">
      <div className="col-10 text-center pt-3">
        <div className="row text-font text-white px-0 mx-0">
          <div className="col-6">
            <p className="contact-us  pt-2">Connect with us</p>
          </div>
          <div className="col-6 px-xl-5" style={{ textAlign: "right" }}>
            <div>
              <button type="button" className="btn btn-link">
                <i
                  className="bi bi-telegram"
                  style={{ fontSize: 40, color: "white" }}
                ></i>
              </button>
              &nbsp; &nbsp;
              <button type="button" className="btn btn-link">
                <i
                  className="bi bi-instagram"
                  style={{ fontSize: 40, color: "white" }}
                ></i>
              </button>
              &nbsp; &nbsp;
              <button type="button" className="btn btn-link">
                <i
                  className="bi bi-twitter"
                  style={{ fontSize: 40, color: "white" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="row px-0 mx-0">
        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
        <div className="col-12 col-md-10 col-lg-10 col-xl-10">
          <div className=" pt-5">
            <div className="">
              <div className="row text-font  text-white">
                <div className="col-4 " >
                  <img
                    src="/img/footerIMage.png"
                    className="img-fluid"
                    alt="..."
                    style={{ width:"70%" }}
                  />
                </div>
                <div className="col-4">
                  <div style={{  }}>
                    <h2>Our Services</h2>
                    {service.map((item, index) => (
                      <div key={index}>
                        <div className="text-capitalize pt-2 footer-text">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-3">
                  <div
                    className="footer-card"
                   
                  >
                    <div className="card-body" style={{ textAlign: "left" }}>
                      <h3>Contact</h3>
                      <small>
                        <i className="bi bi-geo-alt" style={{color:"rgb(250 198 3)"}}></i> &nbsp;Enugu 120004,
                        Nigeria
                      </small>
                      <br />
                      <small>
                        <i className="bi bi-envelope-check" style={{color:"rgb(250 198 3)"}}></i> &nbsp;
                        info@mecnix.com
                      </small>
                    </div>
                  </div>
                  <div style={{ textAlign: "left" }} className="pt-3">
                    {" "}
                    @ 2022 Copyright Mecnix.com
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
