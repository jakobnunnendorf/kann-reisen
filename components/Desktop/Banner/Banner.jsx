import React from "react";
import "./Banner.css";
import { BrandDisplay } from "./BrandDisplay/BrandDisplay";
import { OfferDisplay } from "./OfferDisplay/OfferDisplay";

const Banner = () => {
  return (
    <article className="banner-window" id="banner">
      <BrandDisplay />
      <OfferDisplay />
    </article>
  );
};

export default Banner;
