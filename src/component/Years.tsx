import React from "react";
import "../App.css";

const ConnectWithPeople = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
        <div className="col-12 col-md-10 col-lg-10 col-xl-10">
          <div className=" pt-5">
            <div className="text-center">
              <div className="pt-5">
                <div className="row pt-5">
                  <div className="col-6">
                    <h1 className="display-3" style={{textAlign:"left"}}> connect with billions of people across the Globe.</h1>
                  </div>

                  <div className="col-6">
                    <div>
                      <img
                        src="https://cdn.pixabay.com/photo/2022/05/21/21/04/monkeys-7212290__340.jpg"
                        alt="image"
                      />
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
