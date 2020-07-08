import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return (
        <div className="Content">
            <div className="Account_info">
                <img src={require("../../img/avatar.jpg")} alt="ava" className="Avatar_name" />
                <div className="Profile_info">
                    <p>Name: Dementii</p>
                    <p>Surename: Lenin</p>
                    <p>City: Munhen</p>
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;