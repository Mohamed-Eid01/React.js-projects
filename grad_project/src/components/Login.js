import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

const Login = () => {
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
          <p className="title">Log in to get control</p>

          <input type="text" placeholder="Enter user name" className="input" />

          <div className="password-wrapper">
            <input
              type="password"
              placeholder="Enter Password"
              className="input"
            />
            <span className="eye-icon">
              <img src="/images/iconsss.png" alt="" />
            </span>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button className="login-btn">Log in</button>

          {/* ✅ الجملة الجديدة */}
          <div className="bottom-note">
            <span>Don’t have an account?</span>
            <Link to="/signup" className="signup-link">
              Sign up
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

export default Login;
