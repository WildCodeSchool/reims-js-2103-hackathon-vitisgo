import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (    
    <div>
        <ul>
            <li>
            <NavLink exact to="/" activeClassName="navActive">
                <span>Accueil</span>
            </NavLink>
            </li>
            <li>
            <NavLink exact to="/pourquoi" 
            activeClassName="navActive">
                <span>Pourquoi ?</span>
            </NavLink>
            </li>
            <li>
            <NavLink exact to="/comment" activeClassName="navActive">
                <span>Comment ?</span>
            </NavLink>
            </li>
            <li>
            <NavLink exact to="/avantages" activeClassName="navActive">
                <i></i>
                <span>Avantages</span>
            </NavLink>
            </li>
            <li>
            <NavLink exact to="/about" activeClassName="navActive">
                <span>A propos</span>
            </NavLink>
            </li>
        </ul>
    </div>
    );
};

export default Navigation;