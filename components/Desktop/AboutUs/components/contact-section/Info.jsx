import React from "react";
import { InlineIcon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker-radius-outline";
import phoneIcon from "@iconify/icons-mdi/phone-outline";
import emailIcon from "@iconify/icons-mdi/email-outline";
import Image from "next/image";
import "./info.css";

const contactDetails = [
  {
    value: "Venloer Str. 559, 50825 Köln, Deutschland",
    icon: locationIcon,
  },
  { value: "+49 221 16534999", icon: phoneIcon },
  { value: "info@kannreisen.com", icon: emailIcon },
];

const Info = () => (
  <section className="info">
    <h2 className="uppercase text-2xl">So erreichen Sie uns</h2>
    <div className="h-48 w-96 relative flex justify-start">
      <Image src="/logo.png" alt="Contact" fill className="object-contain" />
    </div>
    <ul className="info-details-container">
      {contactDetails.map((detail) => (
        <li key={detail.value} className="info-detail flex items-center gap-2">
          <InlineIcon icon={detail.icon} />
          <p>{detail.value}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Info;
