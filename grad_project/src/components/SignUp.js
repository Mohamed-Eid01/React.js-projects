import React from "react";
import "../styles/signup.css"; // غيّر الاسم حسب مكان ملف CSS
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container">
      <div className="background">
        <img src="/images/Mask up.png" alt="Logo 1" className="logo-up" />
        <img
          src="/images/logo basic.png"
          alt="Logo 2"
          className="logo-center"
        />
        <img src="/images/Mask down.png" alt="Logo 3" className="logo-down" />
      </div>

      <div className="login-card">
        <div className="logo-section">
          <img src="/images/Guido logo.png" alt="Logo" className="guido-logo" />
        </div>

        <div className="form-section">
          <p className="title">Sign up to get started</p>

          <div className="input-wrapper">
            <input type="text" placeholder="Full Name" className="input" />
            <p className="field-note">Enter your full name</p>
          </div>

          <div className="input-wrapper">
            <input type="email" placeholder="Email address" className="input" />
            <p className="field-note">Enter a valid email</p>
          </div>

          <div className="password-wrapper">
            <input type="password" placeholder="Password" className="input" />
            <p className="field-note">
              Must include at least one letter and one number.
            </p>
            <span className="eye-icon">
              <img src="/images/iconsss.png" alt="eye" />
            </span>
          </div>

          <div className="password-wrapper">
            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
            />
            <p className="field-note">Re-enter your password to confirm.</p>
            <span className="eye-icon">
              <img src="/images/iconsss.png" alt="eye" />
            </span>
          </div>

          <button className="login-btn">Sign Up</button>

          <div className="field-note-bottom">
            Already have an account?{" "}
            <Link to="/login" className="signin-link">
              Login
            </Link>
          </div>
        </div>
      </div>

      <img
        src="/images/Mask group.png"
        alt="footer logo"
        className="footer-logo"
      />
    </div>
  );
};

export default SignUp;
