import React from "react";
import './contactline.css';

export class ContactLine extends React.Component{
    render(){
        return (
                <div className="contactLine">
                    <a href="mailto:info@kannreisen.de"><p>info@kannreisen.de</p></a>
                    <a href="tel:+49-221-16534999"><p>+49 221 16534999</p></a>
                </div>
        )
    }
}