import React from "react";
import "./App.css";
import ConnectWithPeople from "./component/ConnectWithPeople";
import Years from "./component/Years"
import Service from "./component/Service"
import PublicRelation from "./component/PublicRelation"
import Portfolio from "./component/Portfolio";
import Testimony from "./component/Testimony";
function App() {
  return (
    <div>
      <div style={{ background: "#1B2742", color: "white", height: "50rem" }}>
        <div className="row">
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
          <div className="col-12 col-md-10 col-lg-10 col-xl-10">
            <div className="row container pt-5">
              <div className=" col-12 col-md-6 col-lg-6 col-xl-6">
                <p className="h1 pt-5  text-size ">Build. Manage.</p>
                <p className="h1 text-size-xl ">PROMOTE.</p>

                <p className="">
                  We are a Strategic Marketing agency. we set new brands in
                  motion, revive existing ones and create fresh customer's
                  experiences.
                </p>
                <div className="pt-4">
                  <button
                    className="btn  btn-lg"
                    style={{
                      borderRadius: "10px",
                      borderColor: "#FDC604",
                      color: "#FDC604",
                    }}
                  >
                    Send a Request
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6"></div>
            </div>
          </div>
          <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
        </div>
      </div>

      <div className="px-5 pb-5">
        <ConnectWithPeople />
      </div>

      <div className="px-5 pb-5" style={{background:"rgb(236 245 254)"}}> 
        <Years />
        <br/>
      </div>

      <div className="px-5 pb-5" style={{background:"rgb(16 137 242)"}}> 
        < Service />
        <br/>
      </div>

      <div className="px-5 pb-5"> 
        < PublicRelation />
        <br/>
      </div>
      

      <div className="px-5 pb-5" style={{background:"rgb(255 251 239)"}}> 
        < Portfolio />
        <br/>
      </div>

      <div className="px-5 pb-5"> 
        < Testimony />
        <br/>
      </div>
      
     
    </div>
  );
}

export default App;
