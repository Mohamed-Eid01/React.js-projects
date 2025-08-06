import React from "react";
import "../styles/resetpassword.css";

const ResetPassword = () => {
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
          <p className="title">Set a new password</p>

          <div className="password-wrapper">
            <input
              type="password"
              placeholder="Enter new password"
              className="input new-password"
            />
            <p className="field-note">
              Must include at least one letter and one number.
            </p>
            <span className="eye-icon">
              <img src="/images/iconsss.png" alt="" />
            </span>
          </div>

          <div className="password-wrapper">
            <input
              type="password"
              placeholder="Confirm password"
              className="input confirm-password"
            />
            <p className="field-note">Re-enter your password to confirm.</p>
            <span className="eye-icon">
              <img src="/images/iconsss.png" alt="" />
            </span>
          </div>

          <button className="save-btn">Save new password</button>
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

export default ResetPassword;
