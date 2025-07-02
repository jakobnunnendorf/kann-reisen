import React from "react";
import { ContactLine } from "../Banner/BrandDisplay/ContactLine/ContactLine";
import './Impressum.css';

export class Impressum extends React.Component{
    render(){
        return(
            <div className="impressum">
                <h2>Impressum</h2>
                <h4>Kann Reisen GmbH</h4>
                <h4>Venloer Str. 559. 50825 Köln</h4>
                <a href="mailto:info@kannreisen.de"><p>info@kannreisen.de</p></a>
                <p><a href="tel:+49-221-16534999">Tel: +49 221 16534999</a> | <a href="tel:+49-221-16534990">Fax: +49 221 16534990</a></p>
                <p>Inh. Gürkan Kocabas</p>
                <p>Register: Amtsgericht Köln</p>
                <p>Ust. Id. Nr. DE301284263</p>
            </div>
        )
    }
}