import React from 'react';
import cloudVideo from './cloudVideo.mp4'
import './backgroundvideo.css';

export class BackgroundVideo extends React.Component{
    render(){
        return(
                    <div className="video-container">
                        <video autoPlay muted loop id="myVideo" src={cloudVideo}/>
                    </div>
            );
    }
}
