import React from 'react';
import QuestCard from './QuestCard';

const quetes = [
  {
    "id": 1,
    "name": "Champagne en bord de mer",
    "event": 3,
    "description": "Rendez vous au phare et trouvez les réponses du quizz.",
    "validated": true,
    "reward": 100
  },
  {
    "id": 2,
    "name": "Du grain à moudre",
    "event": 2,
    "description": "Trouvez le moulin et faites une photo.",
    "validated": false,
    "reward": 150
  },
  {
    "id": 3,
    "name": "Le faux du vrai",
    "event": 1,
    "description": "Partez à la recherche du code caché parmi les vrais tordus...",
    "validated": false,
    "reward": 200

  }
];

function Quete() {
  return (
    <ul>
      {quetes.map((quete)=>(<li><QuestCard key={quete.id} quete={quete} /></li>))}
    </ul>
  )
}

export default Quete;