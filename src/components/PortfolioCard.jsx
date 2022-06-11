import React from "react";
import PropTypes from "prop-types";

const PortfolioCard = ({ id, title, intro, setModalToOpen }) => {
  return (
    <div className="m-2 duration-300 hover:scale-105">
      <button
        type="submit"
        id={id}
        className="relative flex flex-col w-full cursor-pointer"
        onClick={() => setModalToOpen(id)}
      >
        <div className="w-full h-full  rounded-xl">
          <h3 className="self-center underline font-regular sm:text-lg md:text-xl lg:text-2xl text-primary dark:text-secondary">
            {title}
          </h3>
          <p className="py-1 text-xs italic font-light leading-snug tracking-wide lg:text-lg text-primary dark:text-secondary">
            {intro}
          </p>
        </div>
        <div className="self-end text-xs italic underline sm:text-base text-primary dark:text-secondary">
          + d&apos;infos
        </div>
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
