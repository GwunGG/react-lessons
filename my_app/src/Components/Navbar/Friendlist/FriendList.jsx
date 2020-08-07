import React from 'react';
import s from "./FriendList.module.css";
import FrienElm from './FriendElm/FrienElm';



const Friends=(props)=>{
        const FriendBar = props.NameData.FriendInfo.map(
            (friend, index) => <FrienElm key={ index } name = { friend.name }/>)
    return(
        <div className={s.FriendList_wrapper}>
            {FriendBar}
        </div>   
        );
    }

export default Friends;