import React from 'react';
import { NavLink } from 'react-router-dom';
import './List.css'

const Navigation = () => {
    return (    
    <div className="list">
        <ul>
            <li>
            <NavLink exact to="/" activeClassName="navActive">
                <span>Accueil</span>
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