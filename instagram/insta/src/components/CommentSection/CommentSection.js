import React from 'react';
import './CommentSection.css'
import PropTypes from 'prop-types';
import CommentForm from '../CommentForm';

class CommentSection extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           comments: this.props.comments
        }
    }
    addNewComment = (event, indexNum, commentText) => {
        console.log(this.state.comments)
        const copiedComments = [...this.state.comments]
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
    
    export default CommentSection;
    