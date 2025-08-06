import React from "react";
import "../../styles/landing-page-css/secondsection.css"; 

const SecondSection = () => {
  return (
    <div id="overview" className="about-container">
      <div className="about">
        <h2 className="about-title">
          What is <span className="oneword">Guido</span>?
        </h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              Guido is a cutting-edge embedded system designed to remotely
              monitor and diagnose vehicle health in real time.
              <br />
              Without needing a technician on-site, it ensures quick response
              times, improved safety, and optimized performance — allowing for
              seamless vehicle management.
            </p>
          </div>

          <div className="about-video">
            <div className="video-wrapper">
              <video
                src="/landing-Images/Recording 2025-07-02 063614.mp4"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
