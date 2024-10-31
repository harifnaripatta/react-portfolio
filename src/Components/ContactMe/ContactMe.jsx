import React from "react";
import ContactCardInfo from "./ContactCardInfo/ContactCardInfo";
import "./ContactMe.css";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contactCardInfo">
            <ContactCardInfo />
          </div>
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="hero-line">
        <img src="./bottom-line-right.png" alt="bottom-line-right" />
      </div>
    </>
  );
};

export default ContactMe;
