import React from "react";
import HeroSection from "./HeroSection"; // عدل المسار حسب مكان الملف عندك
import SecondSection from "./Secondsection";
import ThirdPage from "./ThirdPage";
import CardSection from "./CardSection";
import GetStartSection from "./GetStartSection";
import MeetUsSection from "./MeetUsSection";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <HeroSection />
      <SecondSection />
      <ThirdPage />
      <CardSection />
      <GetStartSection />
      <MeetUsSection/>
    </div>
  );
};

export default LandingPage;
