import React from "react";
import "../App.css";

const ConnectWithPeople = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
        <div className="col-12 col-md-10 col-lg-10 col-xl-10">
          <div className=" pt-5">
            <div className="text-centers">
              <div className="pt-5">
                <h1 style={{fontWeight:"bolder"}} className="pb-5 display-5">Public Relation</h1>
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg"
                    alt="image"
                    className="background-image"
                  />
                </div>
                <div className="text-center pt-5  text-font">
                  Excellence with in-built concept and unique products is a
                  kickstart but what's the storyline behind your image out
                  <div>
                    there? let structure your awarness and build trust for your 
                    hand.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="pt-5 chain-border px-3">
            <div className="pt-5 pb-5">
              <h1 className="text text-uppercase">we breathe blockchain</h1>
              <p className=" display-6">We Build, Manage, and Promote</p>

              <div className="d-flex bd-highlight text-size-chain">
                <div className="p-2 flex-fill bd-highlight">NFT</div>
                <div className="p-2 flex-fill bd-highlight">DEFI</div>
                <div className="p-2 flex-fill bd-highlight">CEFI</div>
                <div className="p-2 flex-fill bd-highlight">METAVERSE</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
      </div>
    </div>
  );
};

export default ConnectWithPeople;
