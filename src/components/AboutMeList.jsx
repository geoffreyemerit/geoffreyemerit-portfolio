import React from "react";
import PropTypes from "prop-types";
import AboutMeCard from "./AboutMeCard";

const AboutMeList = ({ aboutMeArray, setSelected }) => {
  return (
    <div className="flex flex-wrap items-center justify-evenly w-full h-full gap-2 cursor-pointer sm:gap-4 lg:w-[90%] md:justify-center lg:gap-10">
      {aboutMeArray &&
        aboutMeArray.map((aboutme) => (
          <AboutMeCard
            key={aboutme.id}
            {...aboutme}
            setSelected={setSelected}
          />
        ))}
    </div>
  );
};

AboutMeList.propTypes = {
  aboutMeArray: PropTypes.string,
  setSelected: PropTypes.string,
};

AboutMeList.defaultProps = {
  aboutMeArray: "",
  setSelected: "",
};

export default AboutMeList;
