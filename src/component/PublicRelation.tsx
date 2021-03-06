import React from "react";
import "../App.css";

const PublicRelation = () => {
  return (
    <div>
      <div className="row px-0 mx-0">
        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
        <div className="col-12 col-md-10 col-lg-10 col-xl-10">
            <div className=" pt-5">
              <div className="text-centers">
                <div className="pt-5">
                  <h3 className="pb-5 puplic-relation-head-text d-none d-md-block">
                    Public Relation
                  </h3>
                  <h3
                    className="pb-3 display-3 d-block d-md-none"
                    style={{ fontWeight: "bolder" }}
                  >
                    Public Relation
                  </h3>
                  <div>
                    <img
                      src="/img/Rectangle 20.png"
                      alt="image"
                      className="background-image"
                    />
                  </div>
                  <div className=" pt-5 puplic-relation-text ">
                    Excellence with in-built concept and unique products is a
                    kickstart but what's the storyline behind your image out
                    there? let structure your awarness and build trust for your
                    hand.
                  </div>
                </div>
              </div>
            </div>
            <div className=" chain-border px-md-4 d-none pt-3 d-md-block postition-public">
              <div className="pt-5 pb-5">
                <h1 className="puplic-relation-head-text2 ">
                  We Breathe BLOCKCHAIN
                </h1>
                <p className=" puplic-relation-head-text3">
                  We Build, Manage, and Promote
                </p>

                <div className="pt-5">
                  <img
                    src="/img/Group18.png"
                    alt="image"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div
              className=" card px-md-5 d-block d-md-none text-center "
              style={{ borderRadius: "15px", borderColor: "black" }}
            >
              <div className="card-body">
                <div className="pt-5 pb-5">
                  <h1 className="  puplic-relation-head-text2-sm pb-3">
                    We Breathe BLOCKCHAIN
                  </h1>
                  <p className=" puplic-relation-head-text-sm">
                    We Build, Manage, and Promote
                  </p>

                  <div className="pt-3">
                    <img
                      src="/img/Group18.png"
                      alt="image"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
      </div>
    </div>
  );
};

export default PublicRelation;
