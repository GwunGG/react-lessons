import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className="Content">
            <div className="My_posts">
                <div className="Post_Avatar"></div>
                <p className="My_posts_text">{props.message}</p>
                <p><br/>Likes:{props.likes}</p>
            </div>
        </div>
    )
}

export default Post;