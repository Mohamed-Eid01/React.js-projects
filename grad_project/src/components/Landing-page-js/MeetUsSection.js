import React from "react";
import meetussection from "../../styles/landing-page-css/meetussection.css";

const MeetUsSection = () => {
  return (
    <div id="meet" className="meet-container">
      <h1>
        Meet the Team Behind <span className="oneword">Guido</span>?
      </h1>
      <p className="team-description">
        Guido was created by passionate computer engineering students
        specializing in embedded systems, automotive tech, and web development —
        combining deep expertise and innovation to redefine vehicle diagnostics.
      </p>
      <div className="team-grid">
        <div className="team-card">
          <div className="card-image-wrapper">
            <img src="/landing-Images/cards/ev9.png" alt="Team Member 1" />
          </div>
          <h3>Mostafa Nour Elden</h3>
          <p>Team Leader</p>
          <a href="#">
            <img src="/landing-Images/Mask group.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="team-card">
          <div className="card-image-wrapper">
            <img src="/landing-Images/cards/ev9.png" alt="Team Member 2" />
          </div>
          <h3>AbdlRhman Elzyat </h3>
          <p>Embedded SW</p>
          <a href="#">
            <img src="/landing-Images/Mask group.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="team-card">
          <div className="card-image-wrapper">
            <img src="/landing-Images/cards/ev9.png" alt="Team Member 3" />
          </div>
          <h3>Mahmoud Hesham</h3>
          <p>Embedded SW</p>
          <a href="#">
            <img src="/landing-Images/Mask group.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="team-card">
          <div className="card-image-wrapper">
            <img src="/landing-Images/cards/ev9.png" alt="Team Member 4" />
          </div>
          <h3>Mohamed Eid</h3>
          <p>Front-End</p>
          <a href="#">
            <img src="/landing-Images/Mask group.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="team-card">
          <div className="card-image-wrapper">
            <img src="/landing-Images/cards/ev9.png" alt="Team Member 5" />
          </div>
          <h3>Mohamed Waled</h3>
          <p>Front-End</p>
          <a href="#">
            <img src="/landing-Images/Mask group.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="team-card">
          <div className="card-image-wrapper">
            <img src="/landing-Images/cards/ev9.png" alt="Team Member 6" />
          </div>
          <h3>Hesham Porike</h3>
          <p>Back-End</p>
          <a href="#">
            <img src="/landing-Images/Mask group.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="team-card">
          <div className="card-image-wrapper">
            <img src="/landing-Images/cards/ev9.png" alt="Team Member 7" />
          </div>
          <h3>Ahmed Hossam</h3>
          <p>ML Engineer</p>
          <a href="#">
            <img src="/landing-Images/Mask group.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="team-card">
          <div className="card-image-wrapper">
            <img src="/landing-Images/cards/ev9.png" alt="Team Member 8" />
          </div>
          <h3>Yousef Saad</h3>
          <p>Embedded SW</p>
          <a href="#">
            <img src="/landing-Images/Mask group.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="team-card">
          <div className="card-image-wrapper">
            <img src="/landing-Images/cards/ev9.png" alt="Team Member 9" />
          </div>
          <h3>Naira Ashraf</h3>
          <p>Testing</p>
          <a href="#">
            <img src="/landing-Images/Mask group.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="team-card">
          <div className="card-image-wrapper">
            <img src="/landing-Images/cards/ev9.png" alt="Team Member 10" />
          </div>
          <h3>Yasmin Mohamed</h3>
          <p>UI/UX</p>
          <a href="#">
            <img src="/landing-Images/Mask group.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="team-card">
          <div className="card-image-wrapper">
            <img src="/landing-Images/cards/ev9.png" alt="Team Member 11" />
          </div>
          <h3>Ahmed Abou Donia</h3>
          <p>Networking / Security</p>
          <a href="#">
            <img src="/landing-Images/Mask group.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="more-info">
        <p>Want to learn more about our technology or meet the team?</p>
        <a href="/project-overview" className="download-link">
          Download Project Overview
        </a>
      </div>
      <div className="footer">
        <p>Guido © 2025. All rights reserved</p>
        <p>
          <a href="#">Privacy Policy</a> |<a href="#">Terms of Service</a> |
          <a href="#">Contact</a>
        </p>
      </div>
    </div>
  );
};

export default MeetUsSection;
