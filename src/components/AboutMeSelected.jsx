import React from "react";
import PropTypes from "prop-types";

const AboutMeSelected = ({ aboutme }) => {
  return (
    <div className="flex items-center justify-center w-full h-full neumorphismbloc bg-primary rounded-xl bg-opacity-70 dark:bg-secondary dark:bg-opacity-70">
      {aboutme.link && (
        <img
          src={aboutme.link}
          className="flex object-cover neumorphismfield w-[95%] h-[95%] rounded-xl"
          alt={aboutme.name}
        />
      )}
    </div>
  );
};

AboutMeSelected.propTypes = {
  aboutme: PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

AboutMeSelected.defaultProps = {
  aboutme: [],
};

export default AboutMeSelected;
