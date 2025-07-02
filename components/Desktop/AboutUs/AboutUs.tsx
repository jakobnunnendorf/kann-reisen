import React from "react";

import IntroSection from "./components/intro/Intro";
import ContactSection from "./components/contact-section/ContactSection";
import MapSection from "./components/map/Map";

import "./aboutus.css";

interface Location {
  address: string;
  lat: number;
  lng: number;
}

const location: Location = {
  address: "Venloer Str. 559, 50825 Köln, Germany.",
  lat: 50.956495918505055,
  lng: 6.903862155645957,
}; // our location object from earlier

const AboutUs: React.FC = () => {
  return (
    <div className="App" id="aboutus">
      <IntroSection />
      <ContactSection />
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    </div>
  );
};

export default AboutUs;
