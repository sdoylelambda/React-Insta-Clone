import React from 'react'; 
import '/.CommentSection';

class CommentForm extends React.Component {
    constructer() {
        super()
        this.state = {
            newComments: ""
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.addNewComment(this.props.postId, this.state.newComment)}>
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

export default CommentForm