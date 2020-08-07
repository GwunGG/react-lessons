import React from 'react';
import s from './FriendElm.module.css';

const FrienElm=(props)=>{
    
    return(
        <div>
            <img src={require("./ava_phoptos/ava1.jpg")} alt="Ava" className={s.avatar_img}/>
            <p className={s.FriendName}>{props.name}</p>
        </div>   
        );
    }


export default FrienElm;