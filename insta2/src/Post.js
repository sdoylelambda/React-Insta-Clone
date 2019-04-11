import React from 'react';
// import dummyData from './dummyData';
import CommentSection from './components/CommentSection/CommentSection';
import PropTypes from 'prop-types';
// import CommentForm from './CommentForm';
// import Comment from './Comment';
import LikeSection from './components/PostContainer/LikeSection';

class Post extends React.Component {
      constructor() {
           super();
//     constructor(props) {
//       super(props);
      this.state = {
        // likes: props.post.likes
      };
    }

// incrementLike = () => {
//     let likes = this.state.likes + 1;
//     this.setState({ likes });
//   };

render() {
        return (
            // PUT IN CSS
            <div style={{border: "1px solid grey", width:300, margin: "10px auto"}}>
                <h1>Instagram</h1>

                <div>
                    <img src={this.props.post.imageUrl} alt='profile thumbnail' />
                    <h4>{this.props.post.username}</h4>
                    <LikeSection  likes={this.props.post.likes} />
                    <CommentSection comments={this.props.post.comments} id={this.props.post.id} addNewComment={this.props.addNewComment}/>
                        
                </div>
            </div>
        );
    }
}
       
    Post.propTypes = {
        post: PropTypes.shape({
            // id: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            // timestamp: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(PropTypes.object).isRequired
        })
    };

export default Post;