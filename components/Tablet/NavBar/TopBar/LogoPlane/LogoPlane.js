import React from 'react';
import logoCut from './LogoCut.jpg'
import airplane from './airplane-icon.png'
import './logoplane.css';

export class LogoPlane extends React.Component{
    render(){
        return(
                <div>
                    <div className="stick"></div>
                    <img src={logoCut} alt="" className="logo"/>
                    <img src={airplane} alt="" class="airplane"/>
                </div>
            );
    }
}
