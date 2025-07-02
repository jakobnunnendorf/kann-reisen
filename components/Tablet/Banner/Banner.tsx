import React from "react";
import "./Banner.css";
import { BrandDisplay } from "./BrandDisplay/BrandDisplay";
import { OfferDisplay } from "./OfferDisplay/OfferDisplay";

const Banner: React.FC = () => {
  return (
    <article className="banner-window">
      <BrandDisplay />
      <OfferDisplay />
    </article>
  );
};

export default Banner;
