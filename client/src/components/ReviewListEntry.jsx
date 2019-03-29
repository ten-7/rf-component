import React from 'react';

const ReviewListEntry = (props) => {
  let id = `entry${props.index}`
  return (
    <div id={id} className="entry">
      <div>
        <span>{props.review.username}</span>
        <span> | {props.review.score}</span>
      </div>
      <div>
        {props.review.body}
      </div>
      <div>
        <span className="likes" onClick={(event) => { props.changeLikeDislike(event, props.index, "likes") }}>Likes: {props.review.likes}</span>
        <span className="dislikes" onClick={(event) => { props.changeLikeDislike(event, props.index, "dislikes") }}> | Dislikes: {props.review.dislikes}</span>
      </div>
    </div>
  );
}

export default ReviewListEntry;