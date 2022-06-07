import React from "react";
import "../App.css";

const ConnectWithPeople = () => {
  return (
    <div>
      <div className="row px-0 mx-0 ">
        <div className="col-12 col-md-12 col-lg-1 col-xl-1"></div>
        <div className="col-12 col-md-12 col-lg-10 col-xl-10">
          <div className=" pt-5">
            <div className="text-centers">
              <div className="pt-5">
                <div className="row pt-2 px-md-5 pb-5 ">
                  {/* show on mobile screen only */}
                  <h1
                    style={{
                      fontWeight: "700",
                      fontSize: "48px",
                      lineHeight: "72px",
                      fontStyle: "normal",
                    }}
                    className="text-white d-block d-md-block d-lg-none d-xl-none text-center"
                  >
                    Our Service
                  </h1>
                  {/* show on mobile screen only  End*/}
                  <div className={`col-6 col-md-12 col-lg-8 col-xl-8`}>
                    <div className="d-none d-md-none d-lg-block d-xl-block">
                      <h1
                        style={{
                          fontWeight: "700",
                          fontSize: "40px",
                          lineHeight: "72px",
                          fontStyle: "normal",
                        }}
                        className="text-white "
                      >
                        Our Service
                      </h1>
                      <div className="text-font text-white text-center-content">
                        @mecnix, we set new brand in motion, revive
                        existingexisting ones. and create fresh customer's
                        experience
                      </div>
                    </div>
                    {/* show on mobile screen only */}
                    <div className="d-block d-md-block d-lg-none d-xl-none text-center">
                      <div className="text-font text-white">
                        @mecnix, we set new brand in motion, revive
                        existingexisting ones. and create fresh customer's
                        experience
                      </div>
                    </div>
                  </div>

                  <div className=" col-6 col-md-12 col-lg-4 col-xl-4  pt-xl-5 pt-4">
                    <div className="px-1 px-xl-5 text-center">
                      <img
                        src="/img/Group 9.png"
                        alt="image"
                        
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-3 service-inner-card ">
                  <div className="pt-5 pb-5">
                    <div className="row gx-md-5 px-lg-3  px-md-0 mx-0 text-font ">
                      <div className=" col-12 col-md-12 col-lg-12 col-xl-4  pb-4 ">
                        <div className="card   service-card" id="service-card">
                          <div className="card-body ">
                            <div className="pt-3 pb-3">
                              <i
                                className="bi bi-megaphone"
                                style={{ fontSize: 30, color: "skyblue" }}
                              ></i>
                            </div>
                            <div
                              className="pb-4"
                              style={{
                                fontWeight: "400",
                                fontSize: "22px",
                                lineHeight: "36px",
                                fontStyle: "normal",
                                textAlign: "justify",
                              }}
                            >
                              Content Marketing
                            </div>
                            <div
                              style={{
                                fontWeight: "300",
                                fontSize: "18px",
                                lineHeight: "30px",
                                fontStyle: "normal",
                                textAlign: "justify",
                              }}
                            >
                              We have first hand knowledge on top trends and
                              leverage our expertise on conversations, and shape
                              leadership with our content distribution methods.
                              you are the hype.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-12 col-lg-12 col-xl-4 pt-md-0 pt-5">
                        <div className="card  service-card" id="service-card">
                          <div className="card-body">
                            <div className="pt-3 pb-3">
                              <i
                                className="bi bi-search"
                                style={{ fontSize: 30, color: "skyblue" }}
                              ></i>
                            </div>
                            <div
                              className="pb-4"
                              style={{
                                fontWeight: "400",
                                fontSize: "22px",
                                lineHeight: "36px",
                                fontStyle: "normal",
                                textAlign: "justify",
                              }}
                            >
                              SEO Optimization 
                            </div>
                            <div
                              style={{
                                fontWeight: "300",
                                fontSize: "18px",
                                lineHeight: "30px",
                                fontStyle: "normal",
                                textAlign: "justify",
                              }}
                            >
                              Search Engine Optimization is not just keywords. With skilled concept, 
                              we propose a unique SEO approach specifically for your business. 
                              We give your content high relevant keywords, and help produce SEO-optimised 
                              content for your blog.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-12 col-xl-4 pt-md-4 pt-5 pt-xl-0">
                        <div className="card service-card" id="service-card">
                          <div className="card-body">
                            <div className="pt-3 pb-3">
                              <i
                                className="bi bi-people"
                                style={{ fontSize: 30, color: "skyblue" }}
                              ></i>
                            </div>
                            <div
                              className="pb-4"
                              style={{
                                fontWeight: "400",
                                fontSize: "22px",
                                lineHeight: "36px",
                                fontStyle: "normal",
                                textAlign: "justify",
                              }}
                            >
                              Community Growth
                            </div>
                            <div
                              style={{
                                fontWeight: "300",
                                fontSize: "18px",
                                lineHeight: "30px",
                                fontStyle: "normal",
                                textAlign: "justify",
                              }}
                            >
                              We locate your target audience and roll them in, 
                              making sure they stick around. It's our reason for organic 
                              conversations on Reddit, Twitter, Telegram, 4chan and other 
                              social media handles, as well as top Cryptocurrency-related forums.
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ConnectWithPeople;
