import React from 'react';
import { TopBar } from './TopBar/TopBar';
import { MenuBurger } from './MenuBurger/MenuBurger';


export class Navigation extends React.Component{
    render(){
        return(
            <div id='navigation' className='navigation'>
                <TopBar />
                <MenuBurger />
            </div>
        )
    }
}