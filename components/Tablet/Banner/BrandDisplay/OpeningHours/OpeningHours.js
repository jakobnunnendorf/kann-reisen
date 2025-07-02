import React from "react";
import './openinghours.css'

export class OpeningHours extends React.Component{
    render(){
        return (<div>
                    <h4> <strong>Öffnungszeiten</strong></h4>
                    <table>
                        <tr>
                            <td>Montag</td>
                            <td>10-17:30 Uhr</td>
                        </tr>
                        <tr>
                            <td>Dienstag</td>
                            <td>10-17:30 Uhr</td>
                        </tr>
                        <tr>
                            <td>Mittwoch</td>
                            <td>10-17:30 Uhr</td>
                        </tr>
                        <tr>
                            <td>Donnerstag</td>
                            <td>10-17:30 Uhr</td>
                        </tr>
                        <tr>
                            <td>Freitag</td>
                            <td>10-17:30 Uhr</td>
                        </tr>
                        <tr>
                            <td>Samstag</td>
                            <td>10-17:30 Uhr</td>
                        </tr>
                        <tr>
                            <td>Sonntag</td>
                            <td>Ruhetag</td>
                        </tr>
                    </table>
                </div>)
    }
}