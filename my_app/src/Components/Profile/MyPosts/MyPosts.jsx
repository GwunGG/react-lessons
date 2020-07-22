import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"

const MyPosts = (props) => {

    let PostElement=props.PostData.PostData.map((p)=>{
        return <Post message={p.message} likes={p.likesCount}/>
      })
      
    return (
        <div className="Content">
            <h3 className={s.post_title}>My posts</h3>
            <div className={s.Post_create_area}>
                <textarea name="" id="" cols="30" rows="10" className={s.post_area} placeholder="Write your post...">
                </textarea>
                <button className={s.Post_button}>
                    Post
                </button>
            </div>
        {PostElement}
        </div>
    )
}

export default MyPosts;