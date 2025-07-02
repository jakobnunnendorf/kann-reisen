import React from 'react';
import './navigationlinks.css';

export class NavigationLinks extends React.Component{
    render(){
        return(
                <ul className="navbar">
                    <li>Home</li>
                    <li>Gallerie</li>
                    <li>Anfahrt</li>
                    <li>Impressum</li>
                    <li>Kontakt</li>
                </ul>
            );
    }
}
