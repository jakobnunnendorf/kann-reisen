import React from "react";
import './dividera.css';

export class DividerA extends React.Component{
    render(){
        return (
        <div className="divider-section" id="dividerA">
            <div className="upperBar"></div>
            <div className="arrow"></div>
            <div className="lowerBar"></div>
        </div>)
    }
}