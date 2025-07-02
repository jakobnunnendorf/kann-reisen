import React from "react";
import './Banner.css';
import { BrandDisplay } from "./BrandDisplay/BrandDisplay";
import { OfferDisplay } from "./OfferDisplay/OfferDisplay";

export class Banner extends React.Component{
    render(){
        return (
                <article className="banner-window">
                    <BrandDisplay />
                    <OfferDisplay />
                </article>
        )
    }
}