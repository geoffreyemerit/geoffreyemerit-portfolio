import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeContext";

const Toggle = ({ mode }) => {
  // >> STATES & SETTERS
  const { setTheme } = useContext(ThemeContext);
  return (
    <div className="p-2 transition duration-500 ease-in-out rounded-full">
      {/* >> ICONS DARK/LIGHT MODE */}
      {mode === "dark" ? (
        <button
          type="button"
          onClick={() => setTheme("light")}
          className="hover:scale-[1.02] tracking-[0.5rem] w-52 h-14 text-3xl uppercase border-2 rounded cursor-pointer border-primary text-secondary bg-primary bg-opacity-50 lg:hover:bg-opacity-80"
        >
          NOIR
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className="hover:scale-[1.02] tracking-[0.5rem] w-52 h-14 text-3xl uppercase border-2 rounded cursor-pointer border-secondary text-primary bg-secondary bg-opacity-50 lg:hover:bg-opacity-80"
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
