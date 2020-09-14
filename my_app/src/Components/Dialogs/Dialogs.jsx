import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./messages/MessageItem";
const Dialogs = (props) => {

    let DialogsElement=props.DialogsData.map((dialog) => {
        return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />;
      })
    
    let MessagesElement=props.MessagesData.map ((m) => {
        return  <MessageItem key={m.id} message={m.message} id={m.id}/>;
      })
    
    let addNewMessage=React.createRef();

    let OnTextChange =()=>{
       let text=addNewMessage.current.value;
       props.onTextChanges(text);
    }
    let addMessage=()=>{
        props.addMessages();
    }
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
                <div>
                        <textarea ref={addNewMessage} onChange={OnTextChange} value={props.MessageText}/> 
                </div>
                <div>
                    <button onClick={addMessage}>
                            Add message
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;