"use client";

import React from "react";
import "./dividera.css";

const DividerA: React.FC = () => {
  return (
    <div className="divider-section" id="dividerA">
      <div className="upperBar"></div>
      <div className="arrow"></div>
      <div className="lowerBar"></div>
    </div>
  );
};

export { DividerA };
