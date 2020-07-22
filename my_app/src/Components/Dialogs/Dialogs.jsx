import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./messages/MessageItem";

const Dialogs = (props) => {

    let DialogsElement=props.DialogsData.DialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} />;
      })
    
    let MessagesElement=props.DialogsData.MessagesData.map ((m) => {
        return  <MessageItem message={m.message} id={m.id}/>;
      })
      
    
    return (
        <div className={s.Dialogs_page}>
            <div className={s.content}>
                Dialogs
            </div>
            <div className={s.dialogs_wrapper}>
                <div className={s.dialogs_items}>
                    {DialogsElement}
                </div>

                <div className={s.messages_items}>
                    {MessagesElement}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;