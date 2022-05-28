import React from "react";
import "../App.css";

const ConnectWithPeople = () => {
  return (
    <div>
      <div className="row px-0 mx-0">
        <div className="col-12 col-md-2 col-lg-2 col-xl-2"></div>
        <div className="col-12 col-md-8 col-lg-10 col-xl-8">
          <div className=" pt-md-5 ">
            <div className="text-center">
              <div className="pt-md-5">
                <div className="row pt-5 gx-5  ">
                  <div className=" col-12 col-md-6 col-lg-6 col-xl-6 py-5">
                    <p
                      className=" d-none d-md-block d-xl-block d-lg-block"
                      style={{
                        textAlign: "left",
                        fontSize: "51px",
                        lineHeight: "109.5%",
                        fontStyle: " normal",
                      }}
                    >
                      Connect with billions of people across the Globe.
                    </p>
                    <p
                     style={{
                      textAlign: "left",
                      fontSize: "40px",
                      
                      fontStyle: " normal",
                    }}
                    className="d-block d-md-none d-xl-none d-lg-none"> Connect with billions of people across the Globe.</p>
                  </div>

                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="d-none d-md-block">
                      <img
                        src="/img/image.svg"
                        alt="image"
                        className="connect-image-align "
                      />
                    </div>
                    {/* only on sm screens */}
                    <div className="d-block d-md-none">
                      <img
                        src="/img/image.svg"
                        alt="image"
                        className="connect-image-align"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-lg-2 col-xl-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithPeople;
