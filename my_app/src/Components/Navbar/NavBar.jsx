import React from 'react';
import './NavBar.css';
import {NavLink} from "react-router-dom" ;

const NavBar=()=>{
    return(
        <div className="NavBar">
            <div className="NavBar_item"><NavLink className="elments_of_nav" to="/Profile">Profile</NavLink></div>
            <div className="NavBar_item"><NavLink className="elments_of_nav" to="/Dialogs">Dialogs</NavLink></div>
            <div className="NavBar_item"><NavLink className="elments_of_nav" to="/Music">Music</NavLink></div>
            <div className="NavBar_item"><NavLink className="elments_of_nav" to="/News">News</NavLink></div>
            <div className="NavBar_item"><NavLink className="elments_of_nav" to="/Settings">Settings</NavLink></div>
        </div>
    )
}

export default NavBar;