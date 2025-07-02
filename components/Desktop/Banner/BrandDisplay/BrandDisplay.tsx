import React from "react";
import "./branddisplay.css";
import BigLogo from "./BigLogo/BigLogo";
import { ContactLine } from "./ContactLine/ContactLine";

const BrandDisplay: React.FC = () => {
  return (
    <div className="brand-display">
      <BigLogo />
      <ContactLine />
    </div>
  );
};

export { BrandDisplay };
