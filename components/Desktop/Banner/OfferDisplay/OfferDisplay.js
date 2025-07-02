import React from "react";
import { ContactButton } from "./ContactButton/ContactButton";
import './offerdisplay.css';
import { Offers } from "./Offers/Offers";

export class OfferDisplay extends React.Component{
    render(){
        return (
                <div className="offer-display">
                    <h3 className="offer-heading">Weil Urlaub die schönste Zeit des Jahres ist, bieten wir Ihnen:</h3>
                    <Offers />
                    <ContactButton />
                </div>
        )
    }
}