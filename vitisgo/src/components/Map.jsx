import React from "react";
import Store from './Store';
import Quete from './Quete';
import MyPosition from './MyPosition';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './Map.css';

const positions = [
  [49.15, 4.02],
  [49.25, 4.02],
  [49.35, 4.02],
]; 

function Map (){
    const [pageStore, setPageStore] = React.useState(false);
    const [pageQuest, setPageQuest] = React.useState(false);
    
    function questChange (){
      setPageQuest(!pageQuest);
  }
  if (pageQuest === true) {
    return (<Quete />);
  }
     
    function handleChange (){
        setPageStore(!pageStore);
    }
    if (pageStore === true) {
      return (<Store />);
    }
    
        return(
        <>
            <div className="MapPage">
                <MapContainer
        style={{
          width: '100vw',
          height: '90vh',
        }}
        center={positions[1]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((position) => (
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
        <MyPosition />
      </MapContainer>
            </div>
            <div className="btnCtn">
            <button className="btnMap" type="button" onClick={handleChange}>Shop</button>
            <button className="btnMap" type="button" onClick={questChange}>Quest</button>
            </div>
            </>
        );
}

export default Map;