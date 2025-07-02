import React from "react";
import './offers.css';

export class Offers extends React.Component{
    render(){
        return (
                <div className="offers wrapper">
                    <h4>bieten wir Ihnen:</h4>
                    <ul>
                        <li>Linienflüge</li>
                        <li>Charterflüge</li>
                        <li>Autovermietung</li>
                        <li>Pauschalreisen</li>
                        <li>Reiseversicherungen</li>
                    </ul>
                </div>
        )
    }
}