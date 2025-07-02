import React from "react";
import { Icon, InlineIcon } from "@iconify/react";

import locationIcon from "@iconify/icons-mdi/map-marker-radius-outline";
import phoneIcon from "@iconify/icons-mdi/phone-outline";
import emailIcon from "@iconify/icons-mdi/email-outline";

import facebookIcon from "@iconify/icons-mdi/facebook";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import twitterIcon from "@iconify/icons-mdi/twitter";

import "./info.css";

const contactDetails = [
  {
    value: "Venloer Str. 559, 50825 Köln, Deutschland",
    icon: locationIcon,
  },
  { value: "+49 221 16534999", icon: phoneIcon },
  { value: "info@kannreisen.com", icon: emailIcon },
];

const renderContactDetails = () =>
  contactDetails.map((detail) => (
    <p key={detail.value} className="info-detail">
      <InlineIcon icon={detail.icon} /> {detail.value}
    </p>
  ));

const renderIcons = () =>
  [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
    <Icon icon={icon} key={key} className="info-icon" />
  ));

const Info = () => (
  <section className="info">
    <h2 className="info-h2">So erreichen Sie uns</h2>

    <div className="info-details-container">{renderContactDetails()}</div>
  </section>
);

export default Info;
