import React from "react";
import Navigation from './Navigation';
import Map from './Map';
import "../App.css"
import Logo from '../asset/logo.png';

function Play () {
    const [playGame, setPlayGame] = React.useState(false);
function handleChange (){
    setPlayGame(!playGame);
}
if (playGame === true) {
  return (<Map />);
}

    return(
        <div className="playPage">
            <img className="playImage" src={Logo} alt="logo" />
            <button className="btn" type="button" onClick={handleChange}>Play</button>
            <Navigation />
        </div>
    )
}

export default Play;