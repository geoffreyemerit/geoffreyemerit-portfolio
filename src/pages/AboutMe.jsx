import React from "react";
import AboutMePage from "../components/AboutMePage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutMe = () => {
  return (
    <div className="w-screen h-screen aboutMeBlack dark:aboutMeWhite">
      <Navbar />
      <AboutMePage />
      <Footer />
    </div>
  );
};

export default AboutMe;
