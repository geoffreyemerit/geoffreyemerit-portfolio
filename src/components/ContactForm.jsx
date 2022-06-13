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
        <p className=" flex justify-center text-xl w-[90%] mt-10 italic text-center order 1 text-secondary dark:text-primary">
          Vous avez une question ou vous souhaitez que l&apos;on travaille
          ensemble ?
        </p>
        <form
          method="POST"
          action="https://getform.io/f/3383e218-0320-4427-8d1e-9cc35b6ea386"
          autoComplete="none"
          className="relative flex flex-col flex-wrap my-10 px-5 py-5 justify-center rounded-3xl w-[80%] sm:w-[60%] lg:w-[35%] neumorphismbloc bg-primary dark:bg-secondary bg-opacity-20 dark:bg-opacity-20"
        >
          {/* >> Name */}
          <div className="relative z-0 flex flex-row m-3">
            <input
              type="text"
              name="nom"
              id="floating_Name"
              autoComplete="none"
              required="required"
              placeholder="NOM*"
              className="cursor-pointer duration-500 ease-in neumorphismfield rounded-md w-full pl-3 py-2.5 text-base text-secondary dark:text-primary bg-transparent dark:border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-tertiary dark:focus:border-secondary placeholder:text-secondary dark:placeholder:text-primary"
            />
          </div>
          {/* >> Address Mail */}
          <div className="relative z-0 flex flex-row m-3">
            <input
              type="email"
              name="email"
              id="floating_email"
              autoComplete="none"
              required="required"
              placeholder="EMAIL*"
              className="cursor-pointer duration-500 ease-in neumorphismfield rounded-md w-full pl-3 py-2.5 text-base text-secondary dark:text-primary bg-transparent dark:border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-tertiary dark:focus:border-secondary placeholder:text-secondary dark:placeholder:text-primary"
            />
          </div>
          {/* >> Phone Number */}
          <div className="relative z-0 flex flex-row m-3">
            <input
              type="tel"
              name="number"
              pattern="[0-9]{10}"
              id="floating_number"
              autoComplete="none"
              required="required"
              placeholder="TÉLÉPHONE*"
              className="cursor-pointer duration-500 ease-in neumorphismfield rounded-md w-full pl-3 py-2.5 text-base text-secondary dark:text-primary bg-transparent dark:border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-tertiary dark:focus:border-secondary placeholder:text-secondary dark:placeholder:text-primary"
            />
          </div>
          {/* >> Message */}
          <div className="relative z-0 flex flex-row m-3">
            <textarea
              type="text"
              name="message"
              rows="10"
              id="floating_message"
              autoComplete="off"
              required="required"
              className="cursor-pointer duration-500 ease-in neumorphismfield rounded-md w-full h-40 pl-3 py-2.5 text-base text-secondary dark:text-primary bg-transparent dark:border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-tertiary dark:focus:border-secondary placeholder:text-secondary dark:placeholder:text-primary"
              placeholder="MESSAGE"
            />
          </div>
          {/* >> Button Submit */}
          <div className="self-center">
            <button
              type="submit"
              className="flex justify-center order-2 px-8 py-3 mx-4 my-2 text-xl text-center duration-500 cursor-pointer neumorphismbutton text-secondary dark:text-primary lg:hover:text-tertiary dark:lg:hover:text-tertiary bg-primary dark:bg-secondary bg-opacity-20 dark:bg-opacity-20"
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
