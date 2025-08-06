import React, { useState } from "react";
import "../styles/forgetpassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [showNote, setShowNote] = useState(false);

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
          <p className="title">
            Forgot your password?
            <br />
            We’ll help you get back into your account.
          </p>

          <input
            type="email"
            placeholder="Enter email address"
            className="input"
          />
          <p className="field-note">Enter a valid email</p>

          <button className="submit-btn" onClick={() => setShowNote(true)}>
            Send reset link
          </button>

          {showNote && (
            <p className="field-note-bottom">
              If an account exists with that email, we’ve sent a reset link.
            </p>
          )}

          <div className="bottom-note">
            <span>Remembered your password?</span>
            <Link to="/login" className="signin-link">
              Sign in
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

export default ForgotPassword;
