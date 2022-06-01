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

const PortfolioModal = ({
  id,
  color,
  date,
  setModal,
  images,
  title,
  desc,
  techs,
  link,
}) => {
  /* >> Carousel Package */
  return (
    // : MODAL DECORATION
    <div className="z-[20] fixed top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-screen h-[1000px] flex justify-center items-center backdrop-blur-[2px]">
      {/* :SECTION 1 */}
      {/* >> Carousel */}
      <div
        className={`flex flex-col border-2 border-[${color}] bg-[${color}] -top-[50%] items-center w-[90%] h-64 justify-center sm:w-[80%] sm:h-80 lg:w-[60%] lg:h-96`}
      >
        <Swiper
          className="w-full h-full sm:h-80 lg:h-96"
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
              <img className="w-full h-full" src={image} alt={id} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* :SECTION 2 */}
        <div
          className={`absolute w-[90%] mt-[32rem] bg-[${color}] h-64 sm:w-[80%] sm:mt-[36rem] lg:mt-[40rem] lg:w-[60%]`}
        >
          {/* >> Title */}
          <h3 className="text-center underline ml-2 mt-1 absolute z-[20] font-bold text-xl text-primary dark:text-secondary -mb-[300px] sm:text-2xl">
            {title}
          </h3>
          {/* >> Date */}
          <span className="absolute w-[90%] italic ml-2 text-xs text-justify mt-8 text-primary dark:text-secondary sm:text-base lg:mt-10">
            Effectué en {date}
          </span>
          {/* >> Paragraph */}
          <p className="absolute w-[90%] ml-2 text-xs text-justify mt-14 text-primary  tracking-tight dark:text-secondary sm:text-base lg:mt-16">
            {desc}
          </p>
          {/* >> Icons Techs */}
          <div className="flex flex-row justify-around mt-40 sm:mt-32 lg:mt-36">
            {techs.map((tech, index) => (
              <img
                className="w-16 h-14 sm:w-16 sm:h-16"
                key={index}
                src={tech}
                alt={tech}
              />
            ))}
          </div>
          {/* >> Button View Site */}
          <a
            href={link}
            target="_blank"
            className="absolute uppercase px-6 ml-2 mt-2 font-medium text-primary bg-opacity-40 border-2 border-primary text-sm bg-primary hover:scale-[1.01] dark:border-secondary dark:bg-secondary dark:text-secondary dark:bg-opacity-40 md:text-base sm:mt-8 lg:mt-4"
            rel="noreferrer"
          >
            Voir site
          </a>
          {/* >> Exit */}
          <button
            type="button"
            onClick={() => {
              setModal();
            }}
            className="absolute z-10 left-[100%] -ml-5 justify-end mt-1 text-2xl text-primary dark:text-secondary hover:scale-105 md:text-3xl sm:-ml-6 sm:mt-8 lg:mt-3"
          >
            X
          </button>
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
  setModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  techs: PropTypes.arrayOf(PropTypes.string),
};

PortfolioModal.defaultProps = {
  id: 1,
  images: [""],
  techs: [""],
};

export default PortfolioModal;
