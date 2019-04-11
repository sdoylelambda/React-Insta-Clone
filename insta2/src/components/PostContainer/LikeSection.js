import React from 'react';



class LikeSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: props.likes,
            liked: false
        }
    }

    incrementLike = () => {
        if(!this.state.liked) {
        let likes = this.state.likes + 1;
        this.setState({ likes, liked: true });
        } else {
            let likes = this.state.likes - 1;
        this.setState({ likes, liked: false });
        }
      };

    render() {
    return [
      <div
        className="like-section"
        key="likes-icons-container"
        onClick={this.incrementLike}> 
        {this.state.likes}
          </div>
        ];
    };
}

export default LikeSection;