import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>          
            <h3>Oups ! Page inexistante...</h3>
            <NavLink exact to="/">                          
              <button className="btn" type="button">Retour à l'accueil</button>
            </NavLink>              
        </div>
    );
};

export default NotFound;