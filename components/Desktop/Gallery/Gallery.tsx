"use client";

import React, { useState, useEffect } from "react";
import "./Gallery.css";
import bahnhof from "./bilder/bahnhof.jpeg";
import brandenburgertor from "./bilder/brandenburgertor.jpeg";
import chicago from "./bilder/chicago.jpeg";
import eifelturm from "./bilder/eifelturm.jpeg";
import fluss from "./bilder/fluss.jpeg";
import gasse from "./bilder/gasse.jpeg";
import italy from "./bilder/italy.jpeg";
import markt from "./bilder/markt.jpeg";
import rom from "./bilder/rom.jpeg";
import russland from "./bilder/russland.jpeg";
import santorini1 from "./bilder/santorini1.jpeg";
import santorini2 from "./bilder/santorini2.jpeg";
import sidney from "./bilder/sidney.jpeg";
import strasse from "./bilder/strasse.jpeg";
import toscana from "./bilder/toscana.jpeg";
import verona from "./bilder/verona.jpeg";
import weihnachten from "./bilder/weihnachten.jpeg";

const images = [
  bahnhof,
  brandenburgertor,
  chicago,
  eifelturm,
  fluss,
  gasse,
  italy,
  markt,
  rom,
  russland,
  santorini1,
  santorini2,
  sidney,
  strasse,
  toscana,
  verona,
  weihnachten,
];

const Gallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<(typeof images)[0]>(
    images[0]
  );

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  }, []);

  return (
    <div className="gallery" id="gallery">
      <h3>Ein Fenster in andere Welten</h3>
      <div className="vacay-window">
        <img src={currentImage.src} alt="" />
      </div>
    </div>
  );
};

export { Gallery };
