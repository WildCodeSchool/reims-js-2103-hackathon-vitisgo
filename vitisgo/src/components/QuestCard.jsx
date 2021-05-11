import React from 'react';
import './QuestCard.css';

function QuestCard({quete}) {
  return (
    <>
      <div className="cardContainer">
        <div className="questCard">
          <p>{quete.name}</p>
          <p>{quete.description}</p>
        </div>
          <span>{quete.validated ? `${quete.reward} Coins` : "No Coins"}</span>
      </div>
    </>
  )
};

export default QuestCard;