import React from "react";
import { Link } from "react-router-dom";
const JobOpening = () => {
  const marketing = [
    {
      title: "marketing",
      subTitle: "growth manager",
      time: "full time",
      work: "remote",
    },
    {
      subTitle: "growth strategist",
      time: "full time",
      work: "remote",
    },

    {
      subTitle: "social media specialist",
      time: "full time",
      work: "remote",
    },
  ];
  const ProductAndDesign = [
    {
      title: "marketing",
      subTitle: "ux reseacher",
      time: "full time",
      work: "remote",
    },
    {
      subTitle: "ui designer",
      time: "full time",
      work: "remote",
    },

    {
      subTitle: "graphics designer",
      time: "full time",
      work: "remote",
    },
    {
      subTitle: "motion/video designer",
      time: "full time",
      work: "remote",
    },
  ];

  const developers = [
    {
      subTitle: "senior backend developer",
      time: "full time",
      work: "remote",
    },
    {
      subTitle: "senior frontend developer",
      time: "full time",
      work: "remote",
    },
  ];
  return (
    <div style={{ background: "rgb(255 251 239)" }}>
      <div className="row px-0 mx-0 ">
        <div className="col-12 col-md-1 col-lg-2 col-xl-2"></div>
        <div className="col-12 col-md-10 col-lg-8 col-xl-8">
          <p className=" open-job-title pt-5 pb-5">Current Opening</p>

          <div>
            <p
              style={{
                fontSize: 35,
                color: "rgb(250 198 3)",
                fontWeight: "bolder",
              }}
            >
              Marketing
            </p>
            <hr />
            {marketing.map((market, index) => (
              <div key={index}>
                <div className="row ">
                  <div className="col-12">
                    <div className="list-group py-3">
                      <div className="" aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                          <h5
                            className="mb-1 text-capitalize"
                            style={{ fontSize: 35 }}
                          >
                            {market.subTitle}
                          </h5>
                          <small>
                            <button
                              type="button"
                              className="btn  btn-sm  text-white"
                              style={{
                                borderRadius: "10px",
                                fontSize: 30,
                                background: "rgb(250 198 3)",
                              }}
                            >
                              <Link
                                to="/apply"
                                className="text-white"
                                style={{ textDecoration: "none" }}
                              >
                                Apply
                              </Link>
                            </button>
                          </small>
                        </div>
                        <div className="mb-1">
                          <div
                            className="d-flex flex-row bd-highlight mb-3 text-capitalize"
                            style={{ fontSize: 24 }}
                          >
                            <div className=" bd-highlight">{market.time}</div>{" "}
                            &nbsp;
                            <div className="bd-highlight">{market.work}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p
              style={{
                fontSize: 35,
                color: "rgb(250 198 3)",
                fontWeight: "bolder",
              }}
            >
              Product and Design
            </p>
            <hr />
            {ProductAndDesign.map((market, index) => (
              <div key={index}>
                <div className="row">
                  <div className="col">
                    <div className="list-group py-3">
                      <div className="" aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                          <div
                            className="mb-1 text-capitalize"
                            style={{ fontSize: 35 }}
                          >
                            {market.subTitle}
                          </div>
                          <small>
                            <button
                              type="button"
                              className="btn  btn-sm  text-white"
                              style={{
                                borderRadius: "10px",
                                fontSize: 30,
                                background: "rgb(250 198 3)",
                              }}
                            >
                              <Link
                                to="/apply"
                                className="text-white"
                                style={{ textDecoration: "none" }}
                              >
                                Apply
                              </Link>
                            </button>
                          </small>
                        </div>
                        <div className="mb-1">
                          <div
                            className="d-flex flex-row bd-highlight mb-3 text-capitalize"
                            style={{ fontSize: 24 }}
                          >
                            <div className=" bd-highlight">{market.time}</div>{" "}
                            &nbsp;
                            <div className="bd-highlight">{market.work}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p
              style={{
                fontSize: 35,
                color: "rgb(250 198 3)",
                fontWeight: "bolder",
              }}
            >
              Devs
            </p>
            <hr />
            {developers.map((market, index) => (
              <div key={index}>
                <div className="row">
                  <div className="col">
                    <div className="list-group py-3">
                      <div className="" aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                          <h5
                            className="mb-1 text-capitalize"
                            style={{ fontSize: 35 }}
                          >
                            {market.subTitle}
                          </h5>
                          <small>
                            <button
                              type="button"
                              className="btn  btn-sm  text-white"
                              style={{
                                borderRadius: "10px",
                                fontSize: 30,
                                background: "rgb(250 198 3)",
                              }}
                            >
                              <Link
                                to="/apply"
                                className="text-white"
                                style={{ textDecoration: "none" }}
                              >
                                Apply
                              </Link>
                            </button>
                          </small>
                        </div>
                        <div className="mb-1">
                          <div
                            className="d-flex flex-row bd-highlight mb-3 text-capitalize"
                            style={{ fontSize: 24 }}
                          >
                            <div className=" bd-highlight">{market.time}</div>{" "}
                            &nbsp;
                            <div className="bd-highlight">{market.work}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-5 pb-5">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-5 col-xl-5 text-center">
                <img
                  src="/img/not-found.png"
                  style={{ width: "100%px", height: "200px" }}
                />
              </div>
              <div className="col-12 col-md-7 col-lg-7 col-xl-7">
                <h1 style={{ fontWeight: "bolder" }}>
                  Can't find  your match?
                </h1>
                <p style={{ fontSize: 32 }}>
                  Tell us what you'av got and how you can help
                </p>
                <div style={{ fontSize: 32 }} className="text-muted">
                  Send Us a mail:{" "}
                  <span style={{ color: "rgb(250 198 3)" }}>
                    mecnix@mecnix.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default JobOpening;
