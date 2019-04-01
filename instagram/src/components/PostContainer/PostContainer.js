import React from 'react';
import dummyData from './dummy-data';
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
                        <CommentSection characterFromMap={instagram} />
                    ))}


                </div>
            </div>
        );
    }
}
  
       


export default PostContainer;