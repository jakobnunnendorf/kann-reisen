"use client";

import React from "react";
import "./contactline.css";

const ContactLine: React.FC = () => {
  return (
    <div className="contactLine">
      <span className="openingHours">
        <p className="title">Öffnungszeiten:</p>
        <p>Montag-Samstag 10-17.30 Uhr</p>
      </span>
      <br />
      <span className="contactInfo">
        <a href="mailto:info@kannreisen.de">
          <p>info@kannreisen.de</p>
        </a>
        <p>
          <a href="tel:+49-221-16534999">+49 221 16534999</a> |{" "}
          <a href="tel:+49-221-16534999">+49 221 16534999</a>
        </p>
      </span>
    </div>
  );
};

export { ContactLine };
