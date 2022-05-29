import React from "react";
import "./App.css";
import NavBar from "./Header/NavBar";
import Footer from "./component/Footer";
const ApplyPage = () => {
  const res = [
    {
      item: "  Compile and analyze data, processes, and codes to troubleshootproblems and identify areas for improvement",
    },
    {
      item: "Collaborating with the front-end developers and other team members to establish objectives and design more functional, cohesive codes to enhance the user experience.",
    },
    {
      item: "Developing ideas for new programs, products, or features by monitoring industry developments and trends.",
    },
    {
      item: "Recording data and reporting it to proper parties, such as clients or leadership",
    },
    {
      item: "Participating in continuing education and training to remain current on best practices, learn new programming languages, and better assist other team members.",
    },
    { item: "Taking lead on projects, as needed." },
  ];
  return (
    <div>
      <NavBar />
      <div className="career-page-image" id="career-page-image"></div>
      <div className="row px-0 mx-0">
        <div className="col-12 col-md-1 col-lg-1 col-xl-2"></div>
        <div className="col-12 col-md-10 col-lg-10 col-xl-8">
          <h1
            className="pt-5 pb-3"
            style={{ color: "#023A6D", fontWeight: "bold" }}
          >
            Backend Developer job description
          </h1>
          <p className="apply-font">
            We are looking for an analytical, results-driven back-end developer
            who will work with team members to troubleshoot and improve current
            back-end applications and processes. The Back-end Developer will use
            his or her understanding of programming languages and tools to
            analyze current codes and industry developments, formulate more
            efficient processes, solve problems, and create a more seamless
            experience for users. You should have excellent communication,
            computer, and project management skills.
            <br></br>
            To succeed as a backend developer, you should be focused on building
            a better, more efficient program and creating a better end-user
            experience. You should be knowledgeable, collaborative, and
            motivated.
          </p>
          <div className="pt-4">
            <h3>Responsibilities:</h3>

            {res.map((content, index) => (
              <div className="form-check py-3" key={index}>
                <input
                  className="form-check-input apply-font"
                  type="checkbox"
                  style={{
                    cursor: "disabled",
                    background: "#FDC604",
                    border: "none",
                  }}
                />
                <label className="form-check-label apply-font">
                  {content.item}
                </label>
              </div>
            ))}
          </div>

          <div className="pt-5">
            <h3>Responsibilities:</h3>

            <div className="apply-font">
              <p>
                Bachelor’s degree in computer programming, computer science, or
                a related field.
              </p>
              <p>More education or experience may be required.</p>
              <p>
                Fluency or understanding of specific languages, such as Java,
                PHP, or Python, and operating systems may be required.
              </p>
              <p>
                Strong understanding of the web development cycle and
                programming techniques and tools.
              </p>
              <p>
                Focus on efficiency, user experience, and process improvement.
                Excellent project and time management skills.
              </p>
              <p>
                Strong problem solving and verbal and written communication
                skills. Ability to work independently or with a group.
              </p>
              <p>Willingness to sit at desk for extended periods.</p>
            </div>
          </div>

          <div className="pb-5 pt-5">
            <h3 style={{ color: "#023A6D", fontWeight: "bold" }}>
              How to apply
            </h3>
            <div className="d-flex flex-row bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <div>
                  <img src="/img/clarity_contract-line.png" alt="image" />
                </div>
              </div>
              <div className="p-2 bd-highlight pt-3">
                <div>
                  <span className="apply-font" style={{ fontWeight: "bold" }}>
                    Send us you cover letter containing link <br /> to your
                    portfolio and resume <br />
                  </span>
                  <span style={{ color: "#FDC604" }}> careers@mecnix.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-1 col-lg-1 col-xl-2"></div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyPage;
