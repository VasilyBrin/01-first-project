import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likesCount='10' dizlikesCount='3' />
        <Post message="It' s my first post" likesCount='0' dizlikesCount='0' />
      </div>
    </div>
  );
};

export default MyPosts;


