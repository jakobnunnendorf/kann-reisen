"use client";

import React, { useState, useEffect } from "react";
import "./Gallery.css";
const images = [
  "/images/gallery/bahnhof.jpeg",
  "/images/gallery/brandenburgertor.jpeg",
  "/images/gallery/chicago.jpeg",
  "/images/gallery/eifelturm.jpeg",
  "/images/gallery/fluss.jpeg",
  "/images/gallery/gasse.jpeg",
  "/images/gallery/italy.jpeg",
  "/images/gallery/markt.jpeg",
  "/images/gallery/rom.jpeg",
  "/images/gallery/russland.jpeg",
  "/images/gallery/santorini1.jpeg",
  "/images/gallery/santorini2.jpeg",
  "/images/gallery/sidney.jpeg",
  "/images/gallery/strasse.jpeg",
  "/images/gallery/toscana.jpeg",
  "/images/gallery/verona.jpeg",
  "/images/gallery/weihnachten.jpeg",
];

const Gallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string>(images[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  }, []);

  return (
    <div className="gallery" id="gallery">
      <h3>Ein Fenster in andere Welten</h3>
      <div className="vacay-window">
        <img src={currentImage} alt="" />
      </div>
    </div>
  );
};

export { Gallery };
