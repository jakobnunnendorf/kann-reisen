import React from 'react';
// import cloudVideo from './cloudVideo.mp4'
import './topbar.css';
import { LogoPlane } from './LogoPlane/LogoPlane';
import { BackgroundVideo } from './BackgroundVideo/BackgroundVideo';

export class TopBar extends React.Component{
    render(){
        return(
                <div className="logo-bar">

                    {/* <div className="video-container">
                        <video autoPlay muted loop id="myVideo" src={cloudVideo}/>
                    </div> */}
                    <BackgroundVideo />
                    <LogoPlane />
                    
                </div>
            );
    }
}
