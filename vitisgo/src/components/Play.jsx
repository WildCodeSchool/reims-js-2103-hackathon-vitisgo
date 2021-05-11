import React from "react";
import Map from './Map'
import "../App.css"
import Logo from '../asset/logo.png';

function Play () {

    return(
        <div className="playPage">
            <img className="playImage" src={Logo} alt="logo" />
            <button className="btn" type="button" onClick={Map}>Play</button>
        </div>
    )
}

export default Play;