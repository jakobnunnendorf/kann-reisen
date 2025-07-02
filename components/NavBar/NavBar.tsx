import React from "react";
import SubBar from "./SubBar/SubBar";
import TopBar from "./TopBar/TopBar";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <header>
      <TopBar />
      <SubBar />
    </header>
  );
};

export default NavBar;
