import React from "react";
import './branddisplay.css';
import { BigLogo } from "./BigLogo/BigLogo";
import { ContactLine } from "./ContactLine/ContactLine";

export class BrandDisplay extends React.Component{
    render(){
        return (
                <div className="brand-display">
                        <BigLogo className="bigLogo"/>
                        <ContactLine className="contactLine"/>
                </div>
        )
    }
}