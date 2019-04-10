import React from 'react';
// import './CommentSection.css'
import PropTypes from 'prop-types';
import CommentForm from '../CommentForm';

class CommentSection extends React.Component {
   constructor(props) {
       super(props)
       console.log(props)
       this.state = {
           comments: []
        }
    }

     componentDidMount() {
    this.setState({comments: this.props.commentText})
  }


    addNewComment = (event, indexNum, commentText) => {
        console.log(event, indexNum, commentText);
        event.preventDefault();
        const copiedComments = [...this.state.comments.commentText]
        const arrayWithNewComment = copiedComments.push(commentText)
        this.setState({comments: arrayWithNewComment})
    }
    
    render() {
        return (
    
            <div>
                {this.props.comments.map(comment => ( 
           <CommentForm comment={comment.comment} comments={comment.comments} newComment={comment.newComment} /> 
        ))}
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
    