import React from 'react';
import s from './MessageItem.module.css';


const Message =(props)=>{
    return(
        <div className={s.message_item}>
            {props.message}
        </div>
    )
}

export default Message;