import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className="Content">
            <div className="Post_create_area">
                <textarea name="" id="" cols="30" rows="10" className="post_area" placeholder="Write your post...">
                </textarea>
                <button className="Post_button">
                    Post
                </button>
            </div>
            <Post message='hi' likes="2"/>
            <Post message='It"s my first post' likes="0"/>
            <Post message='I did it!' likes="4"/>
            <Post message='Eeee' likes="10"/>
        </div>
    )
}

export default MyPosts;