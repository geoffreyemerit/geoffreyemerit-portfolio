import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeContext";

const Toggle = ({ mode }) => {
  // >> STATES & SETTERS
  const { setTheme } = useContext(ThemeContext);
  return (
    <div>
      {/* >> ICONS DARK/LIGHT MODE */}
      {mode === "dark" ? (
        <button
          type="button"
          onClick={() => setTheme("light")}
          className="tracking-[0.5rem] h-[18rem] w-screen lg:w-[50vw] lg:h-screen text-5xl uppercase text-secondary"
        >
          NOIR
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className="tracking-[0.5rem] h-[18rem] w-screen lg:w-[50vw] lg:h-screen text-5xl uppercase text-secondary"
        >
          BLANC
        </button>
      )}
    </div>
  );
};

Toggle.propTypes = {
  mode: PropTypes.string,
};

Toggle.defaultProps = {
  mode: "dark",
};

export default Toggle;
