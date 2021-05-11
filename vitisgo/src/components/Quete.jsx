import React from 'react';

const quetes = [
  {
    "id": 1,
    "name": "Champagne en bord de mer",
    "event": 3,
    "description": "Rendez vous au phare et trouvez les réponses du quizz."
  },
  {
    "id": 2,
    "name": "Du grain à moudre",
    "event": 2,
    "description": "Trouvez le moulin et faites une photo."
  },
  {
    "id": 3,
    "name": "Le faux du vrai",
    "event": 1,
    "description": "Partez à la recherche du code caché parmi les faux tordus..."
  }
];

function Quete() {
  return (
    <ul>
      {quetes.map((quete)=>(<li>{quete.name} : {quete.description}</li>))}
    </ul>
  )
}

export default Quete;