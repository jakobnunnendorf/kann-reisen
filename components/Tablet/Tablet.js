import React from 'react';
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import { Gallery } from './Gallery/Gallery';
import AboutUs from './AboutUs/AboutUs';

export class Tablet extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <Banner/>
                <Gallery/>
                <AboutUs/>
            </div>
        )
    }
}