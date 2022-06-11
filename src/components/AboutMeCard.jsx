import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";

const AboutMeCard = ({ id, link, name, setSelected }) => {
  return (
    <div
      role="button"
      onClick={() => setSelected(id)}
      onKeyDown={() => setSelected(id)}
      tabIndex="0"
      className="relative flex neumorphismbloc items-center justify-center w-[10rem] h-[7rem] bg-primary bg-opacity-70 rounded-xl sm:w-1/6 sm:h-[10rem] dark:bg-secondary dark:bg-opacity-80 group"
    >
      <img
        className="flex object-cover neumorphismfield w-[95%] h-[95%] grayscale-[50%] rounded-xl opacity-100 sm:group-hover:grayscale-0 duration-500"
        src={link}
        alt={name}
      />
      <div className="absolute bg-transparent w-full h-full rounded-xl top-0 left-0 py-8 sm:py-14 px-[40%] hover:opacity-0 duration-500">
        <Logo
          myStyle="w-10 h-10 text-[3rem] font-light text-secondary"
          name="logos-addition"
          id="logos-addition"
        />
      </div>
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
