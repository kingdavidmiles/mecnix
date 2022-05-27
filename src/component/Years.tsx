import React from "react";
import "../App.css";

const ConnectWithPeople = () => {
  return (
    <div>
      <div className="row px-0 mx-0">
        <div className="col-12 col-md-2 col-lg-2 col-xl-2"></div>
        <div className="col-12 col-md-8 col-lg-10 col-xl-8">
          <div className=" pt-5">
            <div className="text-center">
              <div className="pt-5">
                <div className="row pt-5 gx-5">
                  <div className=" col-12 col-md-6 col-lg-6 col-xl-6">
                    <p className=" pt-5" style={{ textAlign: "left" ,fontSize:"51px", lineHeight:"109.5%",fontStyle:" normal"}}>
                      Connect with billions of people across the Globe.
                    </p>
                  </div>

                  <div className="col-12 col-md-6 col-lg-6 col-xl-6" >
                    <div>
                      <img
                        src="/img/image.svg"
                        alt="image"
                        className="connect-image-align d-none d-md-block"
                        
                        
                      />
                       <img
                        src="/img/image.svg"
                        alt="image"
                        className="connect-image-align d-block d-md-none"
                        style={{width:"100%"}}
                        
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
