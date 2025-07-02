import React from "react";
import './biglogo.css';
import kannReisenLogo from './BigLogo.png';

export class BigLogo extends React.Component{
    render(){
        return (
                <div>
                    <img src={kannReisenLogo} alt="" className=""/>
                    <h3>Urlaub im Paradies</h3>
                </div>
            )
    }
}