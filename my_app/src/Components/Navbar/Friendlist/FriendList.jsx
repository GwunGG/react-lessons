import React from 'react';
import s from "./FriendList.module.css";
import FrienElm from './FriendElm/FrienElm';



const Friends=(props)=>{

    let FriendBar=props.NameData.map(friend=>(<FrienElm name={friend}/>))
    
    return(
        <div className={s.FriendList_wrapper}>
            {FriendBar}
            {FriendBar}
            {FriendBar}
        </div>   
        );
    }

export default Friends;