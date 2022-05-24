import React from "react";
import PropTypes from "prop-types";
import AboutMeCard from "./AboutMeCard";

const AboutMeList = ({ data, selected, setSelected }) => {
  console.log(data, selected);
  return (
    <div className="flex flex-wrap items-center justify-evenly w-full h-full gap-2 cursor-pointer sm:gap-4 lg:w-[90%] md:justify-center lg:gap-10">
      {data &&
        data
          .filter((aboutme) => aboutme.id !== selected)
          .map((aboutme) => (
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
  selected: PropTypes.number,
  setSelected: PropTypes.func,
};

AboutMeList.defaultProps = {
  selected: 0,
  setSelected: () => {},
};

export default AboutMeList;
