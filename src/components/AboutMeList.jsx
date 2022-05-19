import React from "react";
import AboutMeCard from "./AboutMeCard";

const AboutMeList = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="flex items-center justify-center cursor-pointer title">
        Qui suis-je ?
      </h1>

      <AboutMeCard />
    </div>
  );
};

export default AboutMeList;
