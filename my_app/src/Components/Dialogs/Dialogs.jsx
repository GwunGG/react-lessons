import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./messages/MessageItem";
import {actionMessageAreaChange,actionCreatorAddMessage} from "./../../redux/state";
const Dialogs = (props) => {

    let DialogsElement=props.DialogsData.DialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} />;
      })
    
    let MessagesElement=props.DialogsData.MessagesData.map ((m) => {
        return  <MessageItem message={m.message} id={m.id}/>;
      })
    
    let addNewMessage=React.createRef();

    let OnTextChange =()=>{
       let text=addNewMessage.current.value;
       props.dispatch(actionMessageAreaChange(text));
    }
    let addMessage=()=>{
        props.dispatch(actionCreatorAddMessage())
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
                        <textarea ref={addNewMessage} onChange={OnTextChange} value={props.DialogsData.MessageText}/> 
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