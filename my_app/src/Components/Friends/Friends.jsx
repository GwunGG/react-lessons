import React from 'react';
import s from './Friends.module.css';
import userPhoto from '../../img/avatar.jpg'
import {NavLink} from "react-router-dom" ;
let Friends = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount /props.pageSize);
    let pages = []; 
    for (let i = 1; i <= 20; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => <span className={props.currentPage === p && s.Selected} onClick={(e) => {props.onPageChanged(p) }}>{p}</span>)}
        </div>
        {
            props.Users.map(u => <div key={u.id} className={s.Friends_wrapper}>
                <div>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img className={s.friend_avatar} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>

                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unFollow(u.id) }} className={s.buttonFollow}>Unfollow</button>
                            : <button onClick={() => { props.Follow(u.id) }} className={s.buttonFollow}>Follow</button>}
                    </div>
                </div>
                <div className={s.userInfoWrapper}>
                    <div className={s.UserInfoNameAndLocWrapper}>
                        <div>{u.name}</div>
                        <div>
                            <div>{'u.location.city'},</div>
                            <div>{'u.location.country'}</div>
                        </div>
                    </div>
                    <div>
                        <div>Status:{u.status}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}


export default Friends;