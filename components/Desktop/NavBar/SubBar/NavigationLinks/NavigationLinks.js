import React from 'react';
import './navigationlinks.css';
import { onlyGallery } from '../../../Functions/ShowGallery';
import { onlyContact } from '../../../Functions/ShowContact';
import { onlyHome } from '../../../Functions/showHome';

export class NavigationLinks extends React.Component{
    render(){
        return(
                <ul className="navbar">
                    <li onClick={onlyHome}>Home</li>
                    <li onClick={onlyGallery}>Gallerie</li>
                    <li onClick={onlyContact}>Kontakt</li>
                </ul>
            );
    }
}
