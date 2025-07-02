import React from 'react';
import { SubBar } from './SubBar/SubBar';
import { TopBar } from './TopBar/TopBar';

export class NavBar extends React.Component{
    render(){
        return(
                <header>
                    <TopBar />
                    <SubBar />
                </header>
            );
    }
}
