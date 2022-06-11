import React from "react";
import { Animated } from "react-animated-css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";
import skillsTech from "../../data/skillsTech";
import Logo from "./Logo";
import skillsPers from "../../data/skillsPers";

const SkillsList = () => {
  return (
    <div>
      {/* :SKILLS PAGE */}
      <Animated
        animationIn="fadeInDownBig"
        animationOut="fadeInDownBig"
        animationInDelay={1}
        animationInDuration={1000}
      >
        <div className="flex flex-col items-center">
          {/* >> Title */}
          <h1 className="flex items-center justify-center mt-5 title">
            Compétences
          </h1>
        </div>
        {/* :CAROUSEL */}
        <div className="flex items-center justify-center my-14">
          <Swiper
            className="flex w-[80%] rounded-3xl neumorphismfield bg-primary bg-opacity-70 sm:w-[70%] dark:bg-secondary dark:bg-opacity-80"
            effect="flip"
            loop
            grabCursor
            pagination
            navigation
            modules={[EffectFlip, Pagination, Navigation]}
          >
            {/* >> Skills Technic */}

            <SwiperSlide>
              <h2 className="flex tracking-[0.2rem] text-sm mt-5 justify-center text-center uppercase text-secondary sm:text-2xl dark:text-primary">
                Compétences Techniques
              </h2>
              <ul className="flex flex-wrap justify-center gap-10 mx-3 my-5 sm:gap-20">
                {skillsTech.map((skill) => (
                  <li
                    key={skill.id}
                    className="flex flex-col items-center justify-center w-20 h-20 mb-2 lg:w-28 lg:h-28"
                  >
                    <Logo
                      myStyle="h-[95%] w-[95%]"
                      name={skill.name}
                      id={skill.id}
                    />
                    <span className="flex items-center justify-center w-20 mt-1 text-base italic uppercase font-extralight text-secondary dark:text-primary">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </SwiperSlide>

            {/* >> Skills Personal */}

            <SwiperSlide>
              <h2 className="flex tracking-[0.2rem] text-sm mt-5 justify-center text-center uppercase text-secondary sm:text-2xl dark:text-primary">
                Compétences Personnelles
              </h2>
              <ul className="flex flex-wrap justify-center gap-16 m-5 sm:gap-20">
                {skillsPers.map((skill) => (
                  <li
                    key={skill.id}
                    className="flex flex-col items-center justify-center w-32 h-32 m-5"
                  >
                    <Logo
                      myStyle="h-[95%] w-[95%] text-secondary dark:text-primary"
                      name={skill.name}
                      id={skill.id}
                    />
                    <span className="text-sm italic text-center uppercase font-extralight text-secondary dark:text-primary">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          </Swiper>
        </div>
      </Animated>
    </div>
  );
};

export default SkillsList;
