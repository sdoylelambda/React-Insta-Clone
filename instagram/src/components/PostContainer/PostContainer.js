import React from 'react';
// import dummyData from './dummyData';
import CommentSection from '../CommentSection/CommentSection';


class PostContainer extends React.Component {
    constructor() {
    super();
    }

    render() {
        return (
            <div>
                <h1>Instagram</h1>

                <div>
                    {this.props.instagramProp.map(instagram => (
                     //   <CommentSection instagramFromMap={instagram} />
                        <CommentSection instagramFromMap={this.state.instagram} />
                    ))}
                </div>
            </div>
        );
    }
}
  
       


export default PostContainer;