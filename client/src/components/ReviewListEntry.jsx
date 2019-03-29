import React from 'react';

const ReviewListEntry = (props) => {
  let id = `entry${props.index}`
  return (
    <div id={id} class="entry">
      <div>
        <span>{props.review.username}</span>
        <span>{props.review.score}</span>
      </div>
      <div>
        {props.review.body}
      </div>
    </div>
  );
}

export default ReviewListEntry;