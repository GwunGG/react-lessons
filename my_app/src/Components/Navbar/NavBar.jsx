import React from 'react';
import './NavBar.css';

const NavBar=()=>{
    return(
        <div className="NavBar">
            <p className="elments_of_nav">Profile</p>
            <p className="elments_of_nav">Dialogs</p>
            <p className="elments_of_nav">Music</p>
            <p className="elments_of_nav">Content</p>
            <p className="elments_of_nav">Settings</p>
        </div>
    )
}

export default NavBar;