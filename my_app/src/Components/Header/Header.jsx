import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className={s.header}>
            <img src="https://i.pinimg.com/originals/48/b3/de/48b3def453a027059945a5251cb1c58b.jpg" className={s.logo_for_site} />
            <p className={s.header_title}>Berserk fun site</p>
            <NavLink to={'/login'}>
                <div className={s.LoginBlock}>
                    LoginForm
                </div>
            </NavLink>
        </div>
    )
}

export default Header;
