import React, { useState } from "react";
import PropTypes from "prop-types";
import PortfolioModal from "./PortfolioModal";

const PortfolioCard = ({
  id,
  title,
  intro,
  date,
  images,
  desc,
  techs,
  link,
  color,
}) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <>
      <div>
        <button
          type="submit"
          id={id}
          className="cursor-pointer"
          onClick={setIsModalOpened}
        >
          <h3 className="font-bold underline sm:text-lg md:text-xl lg:text-2xl text-primary dark:text-secondary">
            {title}
          </h3>
          <p className="py-1 text-xs italic leading-snug tracking-wide text-opacity-100 lg:text-lg text-primary dark:text-secondary">
            {intro}
          </p>
        </button>
      </div>
      {isModalOpened && (
        <PortfolioModal
          id={id}
          title={title}
          intro={intro}
          date={date}
          images={images}
          desc={desc}
          techs={techs}
          link={link}
          color={color}
          setIsModalOpened={setIsModalOpened}
        />
      )}
    </>
  );
};
PortfolioCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  intro: PropTypes.string,
  color: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
  desc: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  techs: PropTypes.arrayOf(PropTypes.string),
};

PortfolioCard.defaultProps = {
  id: 1,
  title: "",
  intro: "",
  color: "",
  date: "",
  link: "",
  desc: "",
  images: [""],
  techs: [""],
};

export default PortfolioCard;
