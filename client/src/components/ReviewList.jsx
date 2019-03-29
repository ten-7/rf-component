import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = (props) => {
  return (
    <div className="reviewList">
      {props.reviews.map((review, index) => (
        <ReviewListEntry review={review} index={index}/>
      ))}
    </div>
  )
}

export default ReviewList;