import React from "react";
import { Animated } from "react-animated-css";

const ContactForm = () => {
  return (
    <Animated
      animationIn="fadeInUpBig"
      animationOut="fadeInUpBig"
      animationInDelay={1}
      animationInDuration={1000}
    >
      <div className="flex flex-col items-center min-h-screen">
        {/* :CONTACT PAGE */}
        {/* >> Title */}

        <h1 className="flex items-center justify-center mt-5 title">Contact</h1>
        {/* :FORM */}
        <p className=" flex justify-center text-xl w-[90%] mt-10 italic text-center order 1 text-tertiary dark:text-primary">
          Vous avez une question ou vous souhaitez que l&apos;on travaille
          ensemble ?
        </p>
        <form
          autoComplete="none"
          className="flex flex-col flex-wrap justify-center rounded-3xl w-[90%] sm:w-[60%] lg:flex-row lg:w-[85%] m-10"
        >
          {/* >> Section Left */}
          <div className="flex justify-center w-full mt-5 lg:w-2/4">
            {/* >> Form Left */}
            <div className="relative flex flex-col w-full">
              {/* >> Name */}
              <div className="relative z-0 flex flex-row m-5">
                <input
                  type="name"
                  id="floating_Name"
                  autoComplete="none"
                  required="required"
                  className="cursor-pointer rounded-md w-full pl-3 py-2.5 text-base text-secondary dark:text-primary bg-transparent border-0 border-b-2 border-l-4 border-tertiary dark:border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-tertiary dark:focus:border-secondary peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_Name"
                  className="ml-3 absolute text-base text-secondary dark:text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-tertiary dark:peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  NOM*
                </label>
              </div>
              {/* >> Address Mail */}
              <div className="relative z-0 flex flex-row m-5">
                <input
                  type="email"
                  id="floating_email"
                  autoComplete="none"
                  required="required"
                  className="cursor-pointer rounded-md w-full pl-3 py-2.5 text-base text-secondary dark:text-primary bg-transparent border-0 border-b-2 border-l-4 border-tertiary dark:border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-tertiary dark:focus:border-secondary peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_email"
                  className=" ml-3 absolute text-base text-secondary dark:text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-tertiary dark:peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  EMAIL*
                </label>
              </div>
              {/* >> Phone Number */}
              <div className="relative z-0 flex flex-row m-5">
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  id="floating_number"
                  autoComplete="none"
                  required="required"
                  className="cursor-pointer rounded-md w-full pl-3 py-2.5 text-base text-secondary dark:text-primary bg-transparent border-0 border-b-2 border-l-4 border-tertiary dark:border-secondary appearance-none  focus:outline-none focus:ring-0 focus:border-tertiary dark:focus:border-secondary peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_number"
                  className=" ml-3 absolute text-base text-secondary dark:text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-tertiary dark:peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  TÉLÉPHONE*
                </label>
              </div>
              {/* >> Message */}
              <div className="relative z-0 flex flex-row m-5">
                <textarea
                  type="text"
                  id="floating_message"
                  autoComplete="off"
                  required="required"
                  className="w-full text-base h-28 rounded-md pl-3 py-2.5 bg-transparent resize-none text-secondary dark:text-primary cursor-pointer border-0 border-b-2 border-l-4 border-tertiary dark:border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-tertiary dark:focus:border-secondary peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_message"
                  className=" ml-3 absolute text-base text-secondary dark:text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-tertiary dark:peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  MESSAGE*
                </label>
              </div>
            </div>
          </div>

          {/* >> Section Right */}
          <div className="flex justify-center order-3 w-full h-full mt-5 lg:w-2/4 lg:justify-end lg:order-2 lg:pr-5">
            {/* :MAP CONTAINER */}
            <div className="flex w-full h-96">
              <div className=" absolute flex items-center justify-center flex-col p-2 m-2 text-base text-center w-[55%] h-24 bg-primary text-secondary rounded-xl sm:w-[40%] lg:text-2xl lg:w-80 dark:bg-secondary dark:text-primary">
                <span className="flex flex-col">Geoffrey Emerit</span>
                <span className="flex flex-col">64100 Bayonne</span>
                <span className="flex flex-col">France</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914988.0965987127!2d-2.3428096296560383!3d44.48097631117679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51408b63ded46f%3A0x9d4bd7d3d9323d5c!2sBayonne!5e0!3m2!1sfr!2sfr!4v1653344798671!5m2!1sfr!2sfr"
                title="map"
                scrolling="no"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>
          {/* >> Button Submit */}
          <div className="flex justify-center order-2 w-full lg:order-3">
            <button
              type="submit"
              className="px-10 mt-10 text-xl text-center border-4 cursor-pointer md:mt-20 text-secondary dark:text-primary border-y-transparent border-x-tertiary dark:border-x-secondary lg:hover:text-tertiary dark:lg:hover:text-tertiary"
            >
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </Animated>
  );
};

export default ContactForm;
