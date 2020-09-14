import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../img/preloader.svg'

const ProfileInfo =(props) =>{
    if(!props.profile){
        return <img src={Preloader}/>
    }
    return(
        <div className={s.Account_info}>
            <img src={require("../../../img/avatar.jpg")} alt="ava" className={s.Avatar_name} />
            <div className={s.Profile_info}>
                <p>{props.profile.fullName}</p>
                <p>Surename: Lenin</p>
                <p>City: Munhen</p>
            </div>
        </div>
    )
}


export default ProfileInfo;