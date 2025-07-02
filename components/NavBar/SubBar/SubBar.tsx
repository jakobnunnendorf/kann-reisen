import React from "react";
import NavigationLinks from "./NavigationLinks/NavigationLinks";
import "./subbar.css";

const SubBar: React.FC = () => {
  return (
    <div className="menu-bar">
      <NavigationLinks />
    </div>
  );
};

export default SubBar;
