import React from "react";
import PropTypes from "prop-types";

const AboutMeCard = ({ link, setSelected, name }) => {
  return (
    <div
      role="button"
      onClick={() => setSelected(link)}
      onKeyDown={() => setSelected(link)}
      tabIndex="0"
      className="flex items-center justify-center w-[8.5rem] h-[5.5rem] bg-primary bg-opacity-70 rounded-xl hover:brightness-125 lg:w-[11.25rem] lg:h-[7.5rem] dark:bg-secondary dark:bg-opacity-80"
    >
      <img
        className="flex w-[8rem] h-[5rem] rounded-xl object-cover lg:w-[10.625rem] lg:h-[6.875rem]"
        src={link}
        alt={name}
      />
    </div>
  );
};

AboutMeCard.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  setSelected: PropTypes.func,
};

AboutMeCard.defaultProps = {
  link: "",
  name: "",
  setSelected: "",
};

export default AboutMeCard;
