import React from 'react';
import Post from '../../Post';

const PostContainer = props => {
    return props.userData.map(post => ( 
            <Post post={post} key={post.id} /> 
         ))
}

export default PostContainer;