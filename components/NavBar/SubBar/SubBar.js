import React from 'react';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import './subbar.css';

export class SubBar extends React.Component{
    render(){
        return(
                <div className="menu-bar">
                    <NavigationLinks />
                </div>
            );
    }
}
