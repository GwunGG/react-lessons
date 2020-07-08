import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className={s.Dialogs_page}>
            <div className={s.content}>
                Dialogs
            </div>
            <div className={s.dialogs_wrapper}>
                <div className={s.dialogs_items}>
                    <div className={s.dialog_item + ' ' + s.active}>Hleb</div>
                    <div className={s.dialog_item}>Kosty</div>
                    <div className={s.dialog_item}>An9</div>
                    <div className={s.dialog_item}>Kolya</div>
                </div>

                <div className={s.messages_items}>
                    <div className={s.message_item}>HI</div>
                    <div className={s.message_item}>How are you?</div>
                    <div className={s.message_item}>Okay, ty</div>
                    <div className={s.message_item}>BB</div>
                    <div className={s.message_item}>W8 pls, bitch</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;