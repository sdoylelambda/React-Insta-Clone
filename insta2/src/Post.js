import React from 'react';
// import dummyData from './dummyData';
import CommentSection from './components/CommentSection/CommentSection';
import PropTypes from 'prop-types';
// import CommentForm from './CommentForm';
// import Comment from './Comment';

function Post(props) {
        return (
            // PUT IN CSS
            <div style={{border: "1px solid grey", width:300, margin: "10px auto"}}>
                <h1>Instagram</h1>

                <div>
                    <img src={props.post.imageUrl} alt='profile thumbnail' />
                    <h4>{props.post.username}</h4>
                        <CommentSection comments={props.post.comments}/>
                        
                </div>
            </div>
        );
    }
       
    Post.propTypes = {
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

export default Post;