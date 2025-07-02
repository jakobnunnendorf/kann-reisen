"use client";
import React from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "./Banner/Banner";
// import { Gallery } from "./Gallery/Gallery";
// import AboutUs from "./AboutUs/AboutUs";
// import { DividerA } from "./DividerA/DividerA";
// import { DividerB } from "./DividerB/DividerB";
// import { Impressum } from "./Impressum/Impressum";

const Desktop: React.FC = () => {
  return (
    <div id="desktop-page">
      <NavBar />
      <Banner />
      {/*
      <DividerA />
      <Gallery />
      <DividerB />
      <AboutUs />
      <Impressum /> */}
    </div>
  );
};

export default Desktop;
