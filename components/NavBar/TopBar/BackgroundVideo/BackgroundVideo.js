import React from "react";
import "./backgroundvideo.css";

export class BackgroundVideo extends React.Component {
  render() {
    return (
      <div className="video-container">
        <video autoPlay muted loop id="myVideo" src="/cloudVideo.mp4" />
      </div>
    );
  }
}
