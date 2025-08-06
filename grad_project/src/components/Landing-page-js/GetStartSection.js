import React from "react";
import getstartsection from "../../styles/landing-page-css/getstartsection.css";
import { Link } from "react-router-dom";


const GetStartSection = () => {
  return (
    <div id="start" className="start-container">
      <div className="background-imgs">
        <img
          src="/landing-Images/imgleft.png"
          alt="img-left"
          className="img-left"
        />
        <img
          src="/landing-Images/imgright.png"
          alt="img-right"
          className="img-right"
        />
        <img
          src="/landing-Images/LOGO vector.png"
          alt="img-center"
          className="img-center"
        />
      </div>

      <div className="content-section">
        <h1>
          Why Choose <span className="oneword">Guido</span>?
        </h1>

        <p className="whyus-paragraph">
          Integrated Solution: Works within your vehicle’s system — no extra
          devices needed. <br />
          Accurate Diagnostics: Advanced algorithms for reliable fault
          detection. <br />
          Enhanced Safety: Identify problems before they become critical. <br />
          Cost-Effective: Avoid unnecessary hardware and maintenance costs.{" "}
          <br />
          Fleet Ready: Ideal for individual drivers and fleet managers alike.
        </p>

        <h3>Ready?</h3>
        <Link to="/login" className="start-button">
          Get Start Now
        </Link>
      </div>
    </div>
  );
};

export default GetStartSection;
