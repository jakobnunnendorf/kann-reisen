"use client";

import React from "react";
import "./offers.css";

const Offers: React.FC = () => {
  return (
    <ul className="offers wrapper">
      <li>Linienflüge</li>
      <li>Charterflüge</li>
      <li>Autovermietung</li>
      <li>Pauschalreisen</li>
      <li>Reiseversicherungen</li>
    </ul>
  );
};

export { Offers };
