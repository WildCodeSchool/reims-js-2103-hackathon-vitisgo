import React from "react";
import Store from './Store';

function Map (){
    const [pageStore, setPageStore] = React.useState(false);
    function handleChange (){
        setPageStore(!pageStore);
    }
    if (pageStore === true) {
      return (<Store />);
    }
    
        return(
            <div className="MapPage">
                <button className="btnMap" type="button" onClick={handleChange}>Shop</button>
            </div>
        )
}

export default Map;