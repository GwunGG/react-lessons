import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom" ;
import FriendList from "./Friendlist/FriendList";


const NavBar=(props)=>{
    /*let FriendData ={
        NameData: [
            {name:"Gleb"},
            {name:"Kosty"},
            {name:"Koly"}
        ],
        AvaData:[
            {Avapath:"./ava_phoptos/ava1.jpg"},
            {Avapath:"./ava_phoptos/ava2.png"},
            {Avapath:"./ava_phoptos/ava3.jpg"}
        ]
    };*/
    let FriendData={
        NameData:[
            {name:'Koly'},
            {name:'Kosty'},
            {name:'Gleb'}
        ]};
    let NameData=["Gleb","Kosty","Koly"];
    return(
        <div className="NavBar">
            <div className={s.NavBar_item}><NavLink className={s.elments_of_nav} to="/Profile">Profile</NavLink></div>
            <div className={s.NavBar_item}><NavLink className={s.elments_of_nav} to="/Dialogs">Dialogs</NavLink></div>
            <div className={s.NavBar_item}><NavLink className={s.elments_of_nav} to="/Music">Music</NavLink></div>
            <div className={s.NavBar_item}><NavLink className={s.elments_of_nav} to="/News">News</NavLink></div>
            <div className={s.NavBar_item}><NavLink className={s.elments_of_nav} to="/Settings">Settings</NavLink></div>
            <div className={s.NavBar_item}><NavLink className={s.elments_of_nav} to="/Friends">Friends</NavLink>
            <FriendList NameData={NameData}/>
            </div>
        </div>
        );
    }

export default NavBar;