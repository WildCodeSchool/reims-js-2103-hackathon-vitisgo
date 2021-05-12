import React, { useState, useEffect, useRef } from 'react';
import Img1 from '../asset/IMG1.jpg';
import Img2 from '../asset/IMG2.jpg';
import Img3 from '../asset/IMG3.jpg';
import Map from './Map';
import './Store.css';

function Store (){
const [imageChange,setImageChange]= React.useState();
const [hiddenShop,setHiddenShop]= useState(false);
const [pageMap, setPageMap] = React.useState(false);
const [isCount,setIsCount]=React.useState(0);



function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Se souvenir de la dernière fonction de rappel.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Configurer l’intervalle.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

 useInterval(() => {
  if(imageChange === 1){
  setIsCount(isCount + 1)}
  if(imageChange === 2){
    setIsCount(isCount + 11)
  }
  },1000);


function handleChange (){
        setPageMap(!pageMap);
    }
    if (pageMap === true) {
      return (<Map />);
    }


function changeState(){
    setHiddenShop(true)
}
const imgList = {
    1:Img2,
    2:Img3
}
function onClickOne(){
 if(isCount >= 10){
    setImageChange(1);
    setIsCount(isCount - 10);
}
}

function onClickTwo(){
  if(isCount >= 100){
    setImageChange(2)
    setIsCount(isCount - 100)
  } 
}
function changeCount(){
     setIsCount(isCount + 1)
   }
   console.log(isCount)
    return(
   <>
   <div className="backG">
        <img className="Image" src={imgList[imageChange] ?? Img1} alt="" onClick={changeCount} />
    </div>
  <div className="btn-content">
  <button className="btnR" type="button" onClick={changeState}>Shop</button>
  <span className="count">{isCount}$</span>
  <button className="btnR" type="button" onClick={handleChange}>Retour</button>
  </div>
  { hiddenShop === true && (
    <div className="Shop">
        <button className="btnShop" type="button" onClick={onClickOne} >Amélioration 1: 10$</button>
        <button className="btnShop" type="button" onClick={onClickTwo} >Amélioration 2: 100$</button>
    </div>
  )}  
    </>
)
}

export default Store;