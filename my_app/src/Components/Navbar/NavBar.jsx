import React from 'react';
import './NavBar.css';

const NavBar=()=>{
    return(
        <div className="NavBar">
            <div className="NavBar_item"><a className="elments_of_nav" href="/Profile">Profile</a></div>
            <div className="NavBar_item"><a className="elments_of_nav" href="/Dialogs">Dialogs</a></div>
            <div className="NavBar_item"><a className="elments_of_nav" href="/Music">Music</a></div>
            <div className="NavBar_item"><a className="elments_of_nav" href="/News">News</a></div>
            <div className="NavBar_item"><a className="elments_of_nav" href="/Settings">Settings</a></div>
        </div>
    )
}

export default NavBar;