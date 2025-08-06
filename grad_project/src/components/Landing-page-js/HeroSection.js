// import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import "../../styles/landing-page-css/herosection.css";
// import CarModel from "../components/Threedmodel/CarModel";

const LandingPage = () => {
  return (
    <div id="firstpage" className="landing-container">
      {/* ======================== Start Hero Section ======================== */}
      <div className="hero-section">
        <div
          className="hero-background"
          style={{
            backgroundImage: "url('/landing-Images/back1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></div>

        <div className="navbar">
          <div className="navbar-left">
            <div className="navbar-left">
              <a href="#firstpage">
                <img
                  src="/landing-Images/logo.png"
                  alt="Site Logo"
                  className="site-logo"
                />
              </a>
            </div>
          </div>

          <div className="navbar-center">
            <a href="#overview" className="nav-link">
              Overview
            </a>
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#systems" className="nav-link">
              Systems
            </a>
            <a href="#start" className="nav-link">
              Get Start
            </a>
            <a href="#meet" className="nav-link">
              Meet Us
            </a>
          </div>

          <Link to="/login" className="login-button">
            Log in
          </Link>
        </div>

        <div className="headline">
          <h1>
            Your Car Has a Voice, <span className="oneword">Guido</span> Helps
            You Hear It
          </h1>
          <p>
            "Instant vehicle diagnostics, health reports, and alerts — wherever
            you are."
          </p>
        </div>
      </div>

      {/* ======================== 3D Car Section ======================== */}
      {/* <CarModel /> */}
      <div className="video-section">
        <video
          src="/landing-Images/Recording 2025-07-02 033726.mp4" // غير المسار حسب مكان الفيديو عندك
          autoPlay
          loop
          muted
          className="video-one"
        />
      </div>
    </div>
  );
};

export default LandingPage;
