import React from "react";
import PropTypes from "prop-types";

const PortfolioCard = ({ id, title, intro, setModalToOpen }) => {
  return (
    <div>
      <button
        type="submit"
        id={id}
        className="cursor-pointer"
        onClick={() => setModalToOpen(id)}
      >
        <h3 className="font-bold underline sm:text-lg md:text-xl lg:text-2xl text-primary dark:text-secondary">
          {title}
        </h3>
        <p className="py-1 text-xs italic leading-snug tracking-wide text-opacity-100 lg:text-lg text-primary dark:text-secondary">
          {intro}
        </p>
      </button>
    </div>
  );
};
PortfolioCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  intro: PropTypes.string,
  setModalToOpen: PropTypes.func,
};

PortfolioCard.defaultProps = {
  id: 1,
  title: "",
  intro: "",
  setModalToOpen: () => {},
};

export default PortfolioCard;
