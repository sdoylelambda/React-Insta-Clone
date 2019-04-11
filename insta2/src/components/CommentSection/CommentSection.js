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


    // addNewComment = (event, commentText) => {
    //     event.preventDefault();
    //     console.log("add comment", event, commentText);
    //     if(this.state.comments !== undefined) {
    //     const newComment = {username: "userTest", text: commentText}
    //     const copiedComments = [...this.state.comments, newComment]
    //     // const arrayWithNewComment = copiedComments.push(commentText)
    //     this.setState({comments: copiedComments})
    //     }
    // }
    
    render() {
        return (
    
            <div>
                {this.props.comments.map(comment => { 
                    return ( 
                        <div>
                            <p>{comment.username}</p> 
                            <p>{comment.text}</p> 
                    </div>
                )})}
        <CommentForm addNewComment={this.props.addNewComment} id={this.props.id} />
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
    