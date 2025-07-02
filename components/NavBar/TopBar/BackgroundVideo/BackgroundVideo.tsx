import React from "react";
import "./backgroundvideo.css";

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop id="myVideo" src="/cloudVideo.mp4" />
    </div>
  );
};

export default BackgroundVideo;
