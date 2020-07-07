import React from 'react';
import './Content.css';

const Content=()=>{
    return(
        <div className="Content">
            <div className="Account_info">
                <img src={require("../../img/avatar.jpg")} alt="ava" className="Avatar_name"/>
                <div className="Profile_info">
                    <p>Name: Dementii</p>
                    <p>Surename: Lenin</p>
                    <p>City: Munhen</p>
                </div>
            </div>
            <div className="Post_create_area">
                <div>
                    <textarea name="" id="" cols="30" rows="10" className="post_area" placeholder="Write your post...">

                    </textarea>
                </div>
                <button className="Post_button">
                        Post
                </button>
            </div>
            <div className="My_posts">
                <div>
                    <h2>Post 1</h2>
                    <p>Bla bla bla</p>
                </div>
            </div>
        </div>
    )
}

export default Content;