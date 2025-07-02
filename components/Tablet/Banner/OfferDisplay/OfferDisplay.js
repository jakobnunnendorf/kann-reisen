import React from "react";
import './offerdisplay.css';
import { Offers } from "./Offers/Offers";

export class OfferDisplay extends React.Component{
    render(){
        return (
                <div className="offer-display">
                    <h3>Weil Urlaub die schönste Zeit des Jahres ist</h3>
                    <Offers />
                    <button>Kontaktieren Sie uns</button>
                </div>
        )
    }
}