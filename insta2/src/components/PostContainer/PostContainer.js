import React from 'react';
// import dummyData from './dummyData';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
// import CommentForm from './CommentForm';
// import Comment from './Comment';

function PostContainer(props) {
        return (
            <div>
                <h1>Instagram</h1>

                <div>
                    <img src={props.post.thumbnailUrl} alt='profile thumbnail' />
                    <h4>{props.post.username}</h4>
                        <CommentSection comments={props.post.comments}/>
                </div>
            </div>
        );
    }
       
    PostContainer.propTypes = {
        post: PropTypes.shape({
            id: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timesstamp: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(PropTypes.object).isRequired
        })
    };

export default PostContainer;