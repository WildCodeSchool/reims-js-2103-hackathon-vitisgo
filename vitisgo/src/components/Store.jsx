import React from 'react';
import Img1 from '../asset/IMG1.jpg';
import Img2 from '../asset/IMG2.jpg';
import Img3 from '../asset/IMG3.jpg';
import Map from './Map';
import './Store.css';

function Store (){
const [imageChange,setImageChange]= React.useState();
const [hiddenShop,setHiddenShop]= React.useState(false);
const [pageMap, setPageMap] = React.useState(false);
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
  setImageChange(1)
}
function onClickTwo(){
    setImageChange(2)
  }
    return(
   <>
   <div className="backG">
        <img className="Image" src={imgList[imageChange] ?? Img1} alt="" />
    </div>
  <button className="hiddenShop" type="button" onClick={changeState}>Shop</button>
  <button className="return" type="button" onClick={handleChange}>Retour</button>
  { hiddenShop === true && (
    <div className="Shop">
        <button className="btnShop" type="button" onClick={onClickOne} >Amélioration 1</button>
        <button className="btnShop" type="button" onClick={onClickTwo} >Amélioration 2</button>
    </div>
  )}  
    </>
)
}

export default Store;