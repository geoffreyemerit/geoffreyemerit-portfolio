import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen font-pat contactBlack dark:contactWhite">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
