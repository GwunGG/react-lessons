import React from 'react';
import s from './ProfileInfo.module.css';
const ProfileInfo =() =>{
    return(
        <div className={s.Account_info}>
            <img src={require("../../../img/avatar.jpg")} alt="ava" className={s.Avatar_name} />
            <div className={s.Profile_info}>
                <p>Name: Dementii</p>
                <p>Surename: Lenin</p>
                <p>City: Munhen</p>
            </div>
        </div>
    )
}


export default ProfileInfo;