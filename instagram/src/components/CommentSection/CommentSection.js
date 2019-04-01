import React from 'react';
import PostContainer from './PostContainer/PostContainer';

function CommentSection(props) {
    return (
        
        <div>

            {/* change characterFromMap */}
            <strong> id:</strong> {props.characterFromMap.id}
            <strong> username:</strong> {props.characterFromMap.username}
            <strong> thumbnailUrl:</strong> {props.characterFromMap.thumbnailUrl}
            <strong> likes:</strong> {props.characterFromMap.likes}
            <strong> timestamp:</strong> {props.characterFromMap.timestamp}
            <strong> comments:</strong> {props.characterFromMap.comments}
        </div>
    )
}


export default CommentSection;



//<strong> Gender:</strong> {props.characterFromMap.gender}