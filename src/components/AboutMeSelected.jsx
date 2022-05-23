import React from "react";
import PropTypes from "prop-types";

const AboutMeSelected = ({ link, name }) => {
  return (
    <div className="flex items-center justify-center w-full h-full rounded-xl bg-primary bg-opacity-70 dark:bg-secondary dark:bg-opacity-70">
      {link && (
        <img
          src={link}
          className="flex rounded-xl object-cover w-full h-full lg:w-[31.25rem] lg:h-[21.875rem]"
          alt={name}
        />
      )}
    </div>
  );
};

AboutMeSelected.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AboutMeSelected;
