import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
          <div className={s.item}>
          <img src="https://avatarfiles.alphacoders.com/491/thumb-49167.png" alt="" />
          { props.message }
          <div>
          <span> like  </span> { props.likesCount }
          </div>
          <div>
          <span> dizlike  </span> { props.dizlikesCount }
          </div>
          </div>
  );
};

export default Post;
