import React from 'react';
import './CommentSection.css'
import PropTypes from 'prop-types';
import CommentForm from '../CommentForm';
import Comment from './Comment';

// import PostContainer from './PostContainer/PostContainer';

class CommentSection extends React.Component {
    constructor(props){
        super(props)
        console.log(props.post.comments)
        this.state = {
            comments: props.post.comments
        }
    }

addNewComment = (event, indexNum, commentText) => {
    const copiedComments = this.state.comments
    const arrayWithNewComment = copiedComments.push(commentText)
    this.setState({comments: arrayWithNewComment})
}

render() {
    return (

        <div>
        <CommentForm postId={this.props.id} addNewComment={this.addNewComment} />

        </div>
    )
}


CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
            text: PropTypes.string
             })
        )
    }
};

export default CommentSection


