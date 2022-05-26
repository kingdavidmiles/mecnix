import React from "react";
import "./App.css";
import NavBar from "./Header/NavBar";
import Footer from "./component/Footer";
const ApplyPage = () => {
  return (
    <div>
      <NavBar />
      <div className="career-page-image"> </div>
      <div className="row px-0 mx-0">
        <div className="col-2"></div>
        <div className="col-8">
          <h1>Backend Developer job description</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium aut, ullam, vero vel accusamus animi odio ea numquam
            tempore voluptates aperiam ut, quo quod libero culpa repudiandae
            temporibus commodi? Ea.
          </p>
        </div>
        <div className="col-2 "></div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyPage;
