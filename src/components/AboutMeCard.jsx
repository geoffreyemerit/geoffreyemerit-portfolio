import React from "react";
import PropTypes from "prop-types";

const AboutMeCard = ({ id, link, name, setSelected }) => {
  return (
    <div
      role="button"
      onClick={() => setSelected(id)}
      onKeyDown={() => setSelected(id)}
      tabIndex="0"
      className="flex items-center justify-center w-[10rem] h-[7rem] bg-primary bg-opacity-70 rounded-xl hover:brightness-125 sm:w-1/6 sm:h-[10rem] dark:bg-secondary dark:bg-opacity-80"
    >
      <img
        className="flex rounded-xl object-cover w-[95%] h-[95%]"
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
  id: PropTypes.number,
};

AboutMeCard.defaultProps = {
  link: "",
  name: "",
  setSelected: () => {},
  id: 0,
};

export default AboutMeCard;
