import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { Banner } from "./Banner/Banner";
import { Gallery } from "./Gallery/Gallery";
import AboutUs from "./AboutUs/AboutUs";

const Tablet: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Gallery />
      <AboutUs />
    </div>
  );
};

export default Tablet;
