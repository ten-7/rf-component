import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = (props) => {
  return (
    <div className="reviewList">
      {props.reviews.map((review, index) => (
        <ReviewListEntry review={review} index={index} key={index} changeLikeDislike={props.changeLikeDislike}/>
      ))}
    </div>
  )
}

export default ReviewList;