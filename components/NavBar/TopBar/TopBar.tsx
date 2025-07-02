import React from "react";
import "./topbar.css";
import LogoPlane from "./LogoPlane/LogoPlane";
import BackgroundVideo from "./BackgroundVideo/BackgroundVideo";

const TopBar: React.FC = () => {
  return (
    <div className="logo-bar">
      <BackgroundVideo />
      <LogoPlane />
    </div>
  );
};

export default TopBar;
