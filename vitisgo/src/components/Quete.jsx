import React from 'react';
import QuestCard from './QuestCard';
import Map from './Map';
import "./QuestCard.css";

const quetes = [
  {
    "id": 1,
    "name": "Le Code secret",
    "event": 4,
    "description": "Trouver le Code secret sur votre carte",
    "validated": true,
    "reward": 300
  },
  {
    "id": 2,
    "name": "Champagne en bord de mer",
    "event": 3,
    "description": "Rendez vous au phare et trouvez le code auprès du vigneron.",
    "validated": true,
    "reward": 100
  },
  {
    "id": 3,
    "name": "Du grain à moudre",
    "event": 2,
    "description": "Trouvez le moulin et faites une photo.",
    "validated": false,
    "reward": 150
  },
  {
    "id": 4,
    "name": "Le faux du vrai",
    "event": 1,
    "description": "Partez à la recherche du code caché parmi les vrais tordus...",
    "validated": false,
    "reward": 200

  }
];

function Quete() {
const [pageMap, setPageMap] = React.useState(false);
const [questM,setQuestM]= React.useState(false);
function modalQuest () {
setQuestM(!questM)
  }

function handleChange (){
    setPageMap(!pageMap);
}
if (pageMap === true) {
  return (<Map />);
}
  return (
    <div className="Quete">
    <button className="btnR" type="button" onClick={handleChange}>Retour</button>
    <ul>
      {quetes.map((quete)=>(<button className="btnQuest" onClick={modalQuest}><QuestCard key={quete.id} quete={quete} /></button>))}
    </ul>
    {questM === true && (
      <div className="Modal">
          <p>Entrer le code</p>
          <input type="text" id="name" name="name" required
           minlength="4" maxlength="8" size="10"></input>
      </div>
    )}
    </div>
  )
}

export default Quete;