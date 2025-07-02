import React from "react";
import './offers.css';

export class Offers extends React.Component{
    render(){
        return (
                <ul className="offers wrapper">
                    <li>Linienflüge</li>
                    <li>Charterflüge</li>
                    <li>Autovermietung</li>
                    <li>Pauschalreisen</li>
                    <li>Reiseversicherungen</li>
                </ul>
    )
    }
}