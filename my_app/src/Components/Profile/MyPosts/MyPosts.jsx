import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"
import {actionCreatorAddPost,actionCreatorOnPostChange} from "./../../../redux/state.js";

const MyPosts = (props) => {

    let PostElement=props.PostData.PostData.map((p)=>{
        return <Post message={p.message} likes={p.likesCount}/>
      })

    let newPostElem = React.createRef();


    let addPost = () =>{
        props.dispatch(actionCreatorAddPost());
    }
    let onPostChange=()=>{
        let gettext=newPostElem.current.value;
        props.dispatch(actionCreatorOnPostChange(gettext));
    }
    return (
        <div className="Content">
            <h3 className={s.post_title}>My posts</h3>
            <div className={s.Post_create_area}>
                <div>
                    <textarea ref={newPostElem} className={s.post_area} onChange={onPostChange} value={props.PostData.NewPostText}/>
                </div>
                <div>
                    <button className={s.Post_button} onClick={addPost}>
                        Post
                    </button>
                </div>
            </div>
        {PostElement}
        </div>
    )
}

export default MyPosts;