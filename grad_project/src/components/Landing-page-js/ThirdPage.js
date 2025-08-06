import React from "react";
import "../../styles/landing-page-css/thirdpage.css";

const ThirdPage = () => {
  return (
    <div id="features" className="features-container">
      {/* تعريفات SVG مخفية */}
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        viewBox="0 0 1063 423"
        preserveAspectRatio="none"
      >
        <defs>
          <mask id="path-1-inside-1_2415_350" fill="white">
            <path d="M52.1111 36.5908C57.3773 15.1101 76.6392 0.00824166 98.756 0.0199581L967.301 0.480072C989.391 0.491775 1008.62 15.5788 1013.89 37.0318L1063.36 238.456C1069.35 262.846 1055.51 287.773 1031.56 295.317C631.194 421.385 399.272 422.56 32.7845 296.089C9.57605 288.08 -3.54352 263.606 2.30237 239.761L52.1111 36.5908Z" />
          </mask>
          <clipPath id="clip-path-custom" clipPathUnits="userSpaceOnUse">
            <path d="M52.1111 36.5908C57.3773 15.1101 76.6392 0.00824166 98.756 0.0199581L967.301 0.480072C989.391 0.491775 1008.62 15.5788 1013.89 37.0318L1063.36 238.456C1069.35 262.846 1055.51 287.773 1031.56 295.317C631.194 421.385 399.272 422.56 32.7845 296.089C9.57605 288.08 -3.54352 263.606 2.30237 239.761L52.1111 36.5908Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="main-container">
        <h1>
          What <span className="oneword">Guido</span> Monitors
        </h1>

        <div className="guido-video-section">
          <video
            src="/landing-Images/Recording 2025-07-02 100326.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className="logos">
            <p className="speed">80 MPH</p>
            <div className="battery-container">
              <img
                className="battery"
                src="/landing-Images/Battery charging.png"
                alt="Battery"
              />
              <span className="battery-level">75%</span>
            </div>
            <img
              className="strange"
              src="/landing-Images/error.png"
              alt="Logo 3"
            />
            <img
              className="heat"
              src="/landing-Images/temps.png"
              alt="Logo 4"
            />
            <img
              className="light"
              src="/landing-Images/lights.png"
              alt="Logo 5"
            />
          </div>
        </div>
        <img
          className="vector-1"
          src="/landing-Images/Vector 1.png"
          alt="vector1"
        ></img>
        <img
          className="vector-2"
          src="/landing-Images/Vector 2.png"
          alt="vector2"
        ></img>
      </div>
    </div>
  );
};

export default ThirdPage;
