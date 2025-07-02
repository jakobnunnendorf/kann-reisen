"use client";

import React from "react";
import "./openinghours.css";

const OpeningHours: React.FC = () => {
  return (
    <div className="opening-hours">
      <h4>
        <strong>Öffnungszeiten</strong>
      </h4>
      <table>
        <tbody>
          <tr className="weekdays">
            <td>Montag-Samstag</td>
            <td>Sonntag</td>
          </tr>

          <tr className="operating-hours">
            <td>10-17.30 Uhr</td>
            <td>Ruhetag</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { OpeningHours };
