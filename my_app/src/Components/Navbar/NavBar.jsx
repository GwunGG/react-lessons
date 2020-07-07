import React from 'react';
import './NavBar.css';

const NavBar=()=>{
    return(
        <div className="NavBar">
            <div className="NavBar_item"><p className="elments_of_nav">Profile</p></div>
            <div className="NavBar_item"><p className="elments_of_nav">Dialogs</p></div>
            <div className="NavBar_item"><p className="elments_of_nav">Music</p></div>
            <div className="NavBar_item"><p className="elments_of_nav">Content</p></div>
            <div className="NavBar_item"><p className="elments_of_nav">Settings</p></div>
        </div>
    )
}

export default NavBar;