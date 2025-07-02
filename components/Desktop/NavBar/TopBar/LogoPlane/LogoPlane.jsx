import React from "react";
import "./logoplane.css";

export class LogoPlane extends React.Component {
  render() {
    return (
      <div>
        <div className="stick"></div>
        <img src="/LogoCut.jpg" alt="" className="logo" />
        <img src="/airplane-icon.png" alt="" className="airplane" />
      </div>
    );
  }
}
