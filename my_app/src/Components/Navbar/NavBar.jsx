import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom" ;



const NavBar=(props)=>{
    
    return(
        <div className="NavBar">
            <div className={s.NavBar_item}><NavLink className={s.elments_of_nav} to="/Profile">Profile</NavLink></div>
            <div className={s.NavBar_item}><NavLink className={s.elments_of_nav} to="/Dialogs">Dialogs</NavLink></div>
            <div className={s.NavBar_item}><NavLink className={s.elments_of_nav} to="/Music">Music</NavLink></div>
            <div className={s.NavBar_item}><NavLink className={s.elments_of_nav} to="/News">News</NavLink></div>
            <div className={s.NavBar_item}><NavLink className={s.elments_of_nav} to="/Settings">Settings</NavLink></div>
            <div className={s.NavBar_item}><NavLink className={s.elments_of_nav} to="/Friends">Friends</NavLink>
            </div>
        </div>
        )};
    

export default NavBar;