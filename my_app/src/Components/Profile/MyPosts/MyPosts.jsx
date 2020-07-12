import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
let PostData =[
    {id: 1, message:"How are you", likesCount:0},
    {id: 2, message:"hello", likesCount:4},
    {id: 3, message:"be", likesCount:2},
    {id: 4, message:"brr", likesCount:6}
]
let PostElement=PostData.map((p)=>{
    return <Post message={p.message} likes={p.likesCount}/>
})
const MyPosts = () => {
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