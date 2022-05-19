import React from "react";
import PropTypes from "prop-types";
import Icons from "../../public/assets/global/logos.svg";

const Logo = ({ id, myStyle, color }) => {
  // ------------------------------------------
  // >> COMPONENT TO CALL SVG IN COMPONENTS
  // ------------------------------------------
  return (
    <svg className={myStyle} fill={color}>
      <use xlinkHref={`${Icons}#${id}`} />
    </svg>
  );
};

Logo.propTypes = {
  myStyle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Logo;
