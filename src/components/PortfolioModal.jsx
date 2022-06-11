import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import Logo from "./Logo";

const PortfolioModal = ({
  id,
  color,
  date,
  images,
  title,
  desc,
  techs,
  link,
  setModalToOpen,
}) => {
  return (
    // : MODAL DECORATION
    <div className="z-[20]  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-screen h-screen flex justify-center items-center backdrop-blur-[2px] bg-primary bg-opacity-50">
      <div
        className={`flex neumorphismbloc flex-col border-2 border-[${color}] bg-[${color}] w-[80%] h-[80%] sm:w-[70%] sm:h-[90%] lg:w-[60%] rounded-2xl animate-modalSlideIn`}
      >
        {/* :SECTION 1 */}
        {/* >> Carousel */}
        <Swiper
          className="flex flex-col w-full h-[40%] sm:h-[50%] lg:h-[55%] rounded-2xl "
          spaceBetween={30}
          loop
          effect="fade"
          navigation
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-full h-full rounded-2xl "
                src={image}
                alt={id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* :SECTION 2 */}
        <div
          className={`flex flex-col justify-between w-full h-[60%] sm:h-[50%] lg:h-[45%] bg-[${color}] rounded-2xl `}
        >
          {/* >> Title */}
          <h3 className="m-1 text-2xl font-bold underline text-start text-primary dark:text-secondary sm:text-3xl">
            {title}
          </h3>
          {/* >> Date */}
          <span className="ml-1 text-sm italic font-light text-justify text-primary dark:text-secondary sm:text-lg">
            Effectué en {date}
          </span>
          {/* >> Paragraph */}
          <p className="my-1 ml-1 mr-3 text-sm font-light tracking-tight text-justify text-primary dark:text-secondary sm:text-xl">
            {desc}
          </p>
          {/* >> Icons Techs */}
          <div className="flex flex-row flex-wrap justify-around ml-1">
            {techs.map((tech, index) => (
              <img
                className="w-10 h-8 sm:h-16 sm:w-20"
                key={index}
                src={tech}
                alt={tech}
              />
            ))}
          </div>
          <div className="flex flex-row items-end justify-between w-full">
            {/* >> Button View Site */}
            <a
              href={link}
              target="_blank"
              className="flex items-center h-10 px-6 mx-2 my-1 text-base font-medium uppercase duration-200 border-2 neumorphismfield text-primary rounded-2xl bg-opacity-40 border-primary bg-primary hover:scale-105 dark:border-secondary dark:bg-secondary dark:text-secondary dark:bg-opacity-40 md:text-lg"
              rel="noreferrer"
            >
              Voir site
            </a>
            {/* >> Exit */}
            <button
              type="button"
              onClick={() => setModalToOpen(-1)}
              className="flex justify-end mx-2 my-1 text-3xl duration-200 rounded-full neumorphismfield text-primary dark:text-secondary hover:scale-105 md:text-4xl"
            >
              <Logo
                myStyle="w-10 h-10 text-primary text-opacity-80 dark:text-secondary dark:text-opacity-80"
                name="logos-cross"
                id="logos-cross"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PortfolioModal.propTypes = {
  id: PropTypes.number,
  color: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  setModalToOpen: PropTypes.func,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  techs: PropTypes.arrayOf(PropTypes.string),
};

PortfolioModal.defaultProps = {
  id: 1,
  images: [""],
  techs: [""],
  setModalToOpen: () => {},
};

export default PortfolioModal;
