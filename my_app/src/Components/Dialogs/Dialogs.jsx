import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/DialogItem';


const Message =(props)=>{
    return(
        <div className={s.message_item}>
            {props.message}
        </div>
    )
}

let DialogsData =[
    {id: 1, name : "Hleb"},
    {id: 2, name:"Kosty"},
    {id: 3, name:"An9"},
    {id: 4, name:"Kol9"}
]

let DialogsElement=DialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
})

let MessagesData =[
    {id: 1, message:"ku"},
    {id: 2, message:"hello"},
    {id: 3, message:"be"},
    {id: 4, message:"brr"}
]
let MessagesElement=MessagesData.map ((m) => {
    return  <Message message={m.message} id={m.id}/>;
})
    

const Dialogs = () => {
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