import React from 'react'; 
// import CommentSection from './CommentSection/CommentSection';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        comments: props.comments,
        comment: '',
        newComment: ''
        }
    }

    handleChange = event => {
        this.setState({ newComment: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.addNewComment(e,this.props.id, this.state.newComment)}>
                    <input  
                        type='text' 
                        placeholder ='Add a comment'
                        value={this.state.newComment}
                        onChange={this.handleChange}
                        />
                </form>
            </div>
        )
    }
}

export default CommentForm;