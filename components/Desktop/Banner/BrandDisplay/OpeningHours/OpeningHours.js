import React from "react";
import './openinghours.css'

export class OpeningHours extends React.Component{
    render(){
        return (<div className="opening-hours">
                    <h4><strong>Öffnungszeiten</strong></h4>
                    <table>
                        <tr className="weekdays">
                            <td>Montag-Samstag</td>
                            <td>Sonntag</td>
                        </tr>
                        
                        <tr className="operating-hours">
                            <td>10-17.30 Uhr</td>
                            <td>Ruhetag</td>
                        </tr>
                    </table>
                </div>)
    }
}