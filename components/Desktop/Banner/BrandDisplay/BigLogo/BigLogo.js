import React from "react";
import './biglogo.css';
import kannReisenLogo from './BigLogo.png';

export class BigLogo extends React.Component{
    render(){
        return (
                <div className="logo-section">
                    <img src={kannReisenLogo} alt="" className="banner-logo"/>
                    <h3>Urlaub, im Paradies</h3>
                </div>
            )
    }
}