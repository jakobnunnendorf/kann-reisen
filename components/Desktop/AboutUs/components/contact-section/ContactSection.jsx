import React from "react";
import ContactForm from "./Form";
import Info from "./Info";

import "./contact-section.css";

const ContactSection = () => (
  <>
    <div className="contact-section">
      <ContactForm />
      <Info />
    </div>
  </>
);

export default ContactSection;
